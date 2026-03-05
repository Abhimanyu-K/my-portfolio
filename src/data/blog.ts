import { BlogPost } from '../types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Scaling Payment Systems: Lessons from Razorpay',
    slug: 'scaling-payment-systems',
    excerpt: 'Insights into building and scaling high-throughput UPI payment systems, handling millions of transactions with reliability and performance.',
    content: `
# Scaling Payment Systems: Lessons from Razorpay

Working on UPI payment systems at Razorpay has taught me invaluable lessons about building systems that need to handle millions of transactions with absolute reliability. Here's what I've learned.

## The Challenge

UPI (Unified Payments Interface) is one of India's most critical payment infrastructures, processing billions of transactions monthly. At Razorpay, we handle a significant portion of this traffic, which means our systems must be:

- **Highly Available**: 99.99% uptime is the minimum acceptable
- **Low Latency**: Users expect instant payment confirmations
- **Fault Tolerant**: Failures should be graceful and recoverable
- **Scalable**: Must handle 10x traffic spikes during peak hours

## Architecture Decisions

### 1. Microservices Over Monolith

We decomposed our large monolith into focused microservices:

- **Payment Processing Service**: Handles transaction flow
- **Reconciliation Service**: Ensures data consistency
- **Notification Service**: Real-time user updates
- **Analytics Service**: Business intelligence and monitoring

Each service can scale independently based on load patterns.

### 2. Kafka for Event Streaming

Kafka became our backbone for async processing:

\`\`\`
Payment Event → Kafka Topic → Multiple Consumers
  ↓
[Processing, Reconciliation, Notifications, Analytics]
\`\`\`

This decoupling allows us to add new consumers without touching the payment flow.

### 3. Golang for Performance

We chose Golang for our core payment services:

- **Concurrency**: Goroutines handle 10,000+ concurrent requests efficiently
- **Low Memory**: Smaller footprint compared to Java/Python
- **Fast Startup**: Critical for horizontal scaling

## Lessons Learned

### 1. End-to-End Testing is Non-Negotiable

We developed comprehensive E2E tests covering:
- Happy path flows
- Timeout scenarios
- Partial payment cases
- Network failures
- Third-party API failures

These tests caught 70% of bugs before production.

### 2. Observability is Your Best Friend

We instrumented everything with Prometheus and Grafana:

- **Latency percentiles** (p50, p95, p99)
- **Error rates** by error type
- **Transaction success rates** by payment method
- **Throughput** trends over time

Dashboards helped us identify issues before customers reported them.

### 3. Canary Deployments Save Lives

We roll out changes gradually:

1. Deploy to 5% of traffic
2. Monitor for 30 minutes
3. Increase to 25%
4. Monitor for 1 hour
5. Full rollout

This caught a critical bug that would have affected 59K transactions.

## The Incident

Speaking of incidents, we once faced a major AWS pipeline failure. Our Kafka-Firehose-Lambda-Redshift pipeline stopped processing, causing 59K transactions to go unrecorded.

The recovery involved:
1. Identifying the Lambda timeout issue
2. Reprocessing messages from Kafka dead-letter queue
3. Validating data integrity in Redshift
4. Implementing better monitoring and alerting

## Key Takeaways

1. **Design for Failure**: Assume every component will fail
2. **Monitor Everything**: You can't fix what you can't see
3. **Test Realistically**: Load tests should mimic production traffic
4. **Document Incidents**: Post-mortems prevent repeat failures
5. **Automate Relentlessly**: Manual processes don't scale

## What's Next?

We're working on:
- Multi-region deployment for better availability
- ML-based fraud detection
- Sub-second payment confirmations
- Better developer experience with improved APIs

Building payment systems is challenging but incredibly rewarding. Every optimization directly impacts millions of users.

---

*Have questions about scaling payment systems? Feel free to reach out!*
    `,
    date: '2025-02-01',
    tags: ['Payment Systems', 'Golang', 'Microservices', 'UPI', 'Scalability'],
    readTime: '10 min read',
    author: 'Abhimanyu Kumbhar',
  },
  {
    id: 'blog-2',
    title: 'Debugging Production: AWS Pipeline Incident Recovery',
    slug: 'aws-pipeline-incident-recovery',
    excerpt: 'A deep dive into resolving a critical AWS incident affecting 59K transactions, including investigation, root cause analysis, and recovery strategies.',
    content: `
# Debugging Production: AWS Pipeline Incident Recovery

Every engineer's nightmare: **"We're missing 59,000 transactions in our data warehouse."**

This is the story of how we debugged and recovered from a critical AWS pipeline failure at 2 AM.

## The Alert

**Saturday, 2:14 AM**: Slack notification goes off. Our monitoring detected a significant drop in data warehouse ingestion rates. What should have been 10K transactions/hour was showing zero.

## Initial Investigation

### Step 1: Check the Basics

\`\`\`bash
# Is Kafka producing?
kafka-consumer-groups --describe --group analytics-consumer

# Result: ✅ Kafka was healthy, offset lag = 0
\`\`\`

### Step 2: Check Firehose

AWS Console → Kinesis Firehose → Delivery Stream Metrics

**Red flags:**
- Incoming records: 10K/min ✅
- Records delivered to S3: 0 ❌
- Lambda invocation failures: 100% ❌

## The Problem

Our data pipeline looked like this:

\`\`\`
Kafka → Firehose → Lambda (transformation) → S3 → Redshift
\`\`\`

Lambda was timing out on every single invocation.

## Root Cause Analysis

### CloudWatch Logs Investigation

\`\`\`json
{
  "errorMessage": "Task timed out after 3.00 seconds",
  "errorType": "TimeoutError",
  "requestId": "abc-123-def"
}
\`\`\`

### What Changed?

Git blame showed a recent deployment:

\`\`\`python
# Old code (fast)
def transform(record):
    return json.loads(record)

# New code (slow - making external API call!)
def transform(record):
    data = json.loads(record)
    # This was added without realizing the impact
    enriched = fetch_user_metadata(data['user_id'])  # 2-3s per call!
    return {**data, **enriched}
\`\`\`

The developer added user enrichment without considering:
1. Lambda timeout was 3 seconds
2. External API calls added 2-3 seconds per record
3. Firehose sends batches, not single records

## The Recovery Plan

### Phase 1: Stop the Bleeding (5 minutes)

\`\`\`bash
# Rollback the Lambda function
aws lambda update-function-code \\
  --function-name transaction-transformer \\
  --s3-bucket deployments \\
  --s3-key previous-version.zip

# Verify
aws lambda invoke --function-name transaction-transformer out.txt
# Success! Timeout fixed.
\`\`\`

### Phase 2: Recover Missing Data (2 hours)

The 59K transactions were stuck in Kafka (thank god for retention!).

1. **Create temporary Firehose delivery stream**
2. **Reprocess from Kafka offset**

\`\`\`go
// Go script to replay Kafka messages
func replayKafka(topic string, startOffset, endOffset int64) {
    consumer := kafka.NewConsumer(config)
    consumer.Assign([]kafka.TopicPartition{
        {Topic: &topic, Partition: 0, Offset: startOffset},
    })

    for offset := startOffset; offset < endOffset; offset++ {
        msg := consumer.ReadMessage(timeout)
        firehose.PutRecord(msg.Value)
    }
}
\`\`\`

3. **Validate data in Redshift**

\`\`\`sql
-- Check counts match
SELECT COUNT(*) FROM transactions
WHERE created_at BETWEEN '2025-01-15 00:00' AND '2025-01-15 06:00';

-- Expected: 59,000
-- Actual: 59,000 ✅
\`\`\`

### Phase 3: Prevent Recurrence (1 week)

1. **Increased Lambda timeout** to 30s with proper alerting
2. **Added Lambda duration metrics** to Grafana
3. **Load tested** the enrichment feature separately
4. **Created runbook** for similar incidents
5. **Implemented circuit breaker** for external API calls

## Lessons Learned

### 1. Always Consider Production Load

That "harmless" API call becomes a bottleneck at scale:

- **Dev:** 10 records/sec × 2s = fine
- **Prod:** 1000 records/sec × 2s = disaster

### 2. Monitor Lambda Duration, Not Just Errors

We had alerts for errors but not for duration increases. Now we alert when p99 latency > 50% of timeout.

### 3. Have a Rollback Strategy

Being able to rollback in 5 minutes saved us from hours of data loss.

### 4. Data Retention is Your Safety Net

Kafka's 7-day retention meant we could replay messages. Without it, those 59K transactions would be lost forever.

### 5. Document Your Pipelines

Having a clear diagram of data flow helped us isolate the issue quickly.

## The Fix That Worked

We moved the enrichment to an async batch job:

\`\`\`
Kafka → Firehose → Lambda (basic transform) → S3 → Redshift
                                                    ↓
                                          Batch Job (enrichment)
\`\`\`

This decoupled the real-time pipeline from slow external calls.

## Incident Timeline

- **2:14 AM** - Alert fired
- **2:19 AM** - Root cause identified
- **2:24 AM** - Lambda rolled back
- **2:30 AM** - Pipeline resumed
- **4:45 AM** - All 59K transactions recovered
- **5:00 AM** - Validation complete

**Total data loss:** 0 transactions ✅

## Key Takeaways

1. **Timeouts are not suggestions** - Design around them
2. **External dependencies kill performance** - Cache or async
3. **Monitoring should be proactive** - Alert on trends, not just failures
4. **Runbooks are invaluable** - Document as you fix
5. **Data retention saves lives** - Keep it long enough

---

*Debugging production is stressful, but every incident teaches you something new. Stay calm, follow the data, and always have a rollback plan.*
    `,
    date: '2025-01-15',
    tags: ['AWS', 'Kafka', 'Incident Management', 'Debugging', 'DevOps'],
    readTime: '12 min read',
    author: 'Abhimanyu Kumbhar',
  },
  {
    id: 'blog-3',
    title: 'Optimizing CI/CD: From 50 Minutes to 15 Minutes',
    slug: 'optimizing-cicd-pipelines',
    excerpt: 'How we cut deployment time by 70% for 27+ microservices through automation, multi-arch builds, and intelligent quality gates.',
    content: `
# Optimizing CI/CD: From 50 Minutes to 15 Minutes

Waiting 50 minutes for a deployment is painful. Doing it 10 times a day is torture. Here's how we cut our CI/CD time by 70%.

## The Problem

Our deployment pipeline for 27 microservices was taking **50+ minutes**, which meant:

- Slow feedback loops for developers
- Delayed production deployments
- Blocked releases waiting for CI
- Engineers context-switching while waiting

## The Baseline

Our original pipeline looked like this:

\`\`\`yaml
Pipeline Stages:
1. Checkout (2 min)
2. Unit Tests (8 min)
3. Integration Tests (12 min)
4. Build Docker Images (15 min)
5. Security Scans (7 min)
6. Deploy to Staging (4 min)
7. E2E Tests (2 min)

Total: ~50 minutes
\`\`\`

## Optimization 1: Parallelize Everything

**Before:**
\`\`\`
Tests → Build → Scan → Deploy
\`\`\`

**After:**
\`\`\`
├─ Unit Tests
├─ Integration Tests
├─ Linting
└─ Security Scans
    ↓
  Build → Deploy
\`\`\`

**Saved:** 10 minutes

## Optimization 2: Smart Caching

We weren't caching dependencies, so every build downloaded the same packages.

**Before:**
\`\`\`dockerfile
FROM golang:1.21
WORKDIR /app
COPY . .
RUN go mod download  # Downloads every time!
RUN go build
\`\`\`

**After:**
\`\`\`dockerfile
FROM golang:1.21
WORKDIR /app

# Cache dependencies separately
COPY go.mod go.sum ./
RUN go mod download  # Cached layer!

COPY . .
RUN go build
\`\`\`

**Saved:** 5 minutes

## Optimization 3: Multi-Arch Builds

We were building for AMD64 and ARM64 sequentially.

**Before (Sequential):**
\`\`\`bash
docker build --platform linux/amd64 .  # 8 min
docker build --platform linux/arm64 .  # 8 min
# Total: 16 minutes
\`\`\`

**After (Parallel):**
\`\`\`bash
docker buildx build \\
  --platform linux/amd64,linux/arm64 \\
  --cache-from type=registry \\
  --cache-to type=registry \\
  .
# Total: 9 minutes
\`\`\`

**Saved:** 7 minutes

## Optimization 4: Incremental Testing

We were running all tests for all services, even when only one service changed.

**Solution:** Dependency graph analysis

\`\`\`python
# detect_changes.py
def get_changed_services(git_diff):
    changed_files = git_diff.split('\\n')
    services = set()

    for file in changed_files:
        if file.startswith('services/'):
            service = file.split('/')[1]
            services.add(service)
            # Add dependent services
            services.update(get_dependencies(service))

    return services

# Only test changed services + dependencies
changed = get_changed_services(git.diff('origin/main'))
for service in changed:
    run_tests(service)
\`\`\`

**Saved:** 8 minutes (on average)

## Optimization 5: Quality Gates

We added fast-fail quality gates to catch issues early:

\`\`\`yaml
stages:
  - name: Fast Checks (3 min)
    steps:
      - lint
      - type-check
      - security-scan
    fail_fast: true  # Stop if these fail

  - name: Tests (parallel)
    steps:
      - unit-tests
      - integration-tests

  - name: Build & Deploy
\`\`\`

If linting fails (30 seconds), we don't waste 10 minutes running tests.

**Saved:** 5 minutes per failed build

## Optimization 6: Test Optimization

Some tests were unnecessarily slow:

**Example: Database Tests**

**Before:**
\`\`\`go
func TestUserCreation(t *testing.T) {
    db := setupDatabase()  // Slow! Creates new DB each test
    defer db.Teardown()

    user := createUser(db, "test@example.com")
    assert.NotNil(t, user)
}
\`\`\`

**After:**
\`\`\`go
var testDB *sql.DB

func TestMain(m *testing.M) {
    testDB = setupDatabase()  // Once for all tests
    code := m.Run()
    testDB.Teardown()
    os.Exit(code)
}

func TestUserCreation(t *testing.T) {
    tx := testDB.Begin()  // Use transaction
    defer tx.Rollback()   // Auto-cleanup

    user := createUser(tx, "test@example.com")
    assert.NotNil(t, user)
}
\`\`\`

**Saved:** 4 minutes

## Optimization 7: Manifest Generation Automation

We were manually updating Kubernetes manifests, which was error-prone.

**Solution:** Automated manifest generation

\`\`\`bash
# generate_manifests.sh
for service in services/*; do
    helm template $service \\
      --set image.tag=$GIT_SHA \\
      --set resources.limits.memory=512Mi \\
      > k8s/$service.yaml
done
\`\`\`

**Saved:** 2 minutes + reduced errors

## The Results

**Before:** 50 minutes
**After:** 15 minutes
**Improvement:** 70% faster ⚡

### Impact

- **Deployments per day:** 5 → 15
- **Developer satisfaction:** ↑ 80%
- **Mean time to deploy:** 50m → 15m
- **Failed build cost:** $5 → $1.50 (in CI time)

## Bonus: Cost Savings

Our CI runs on GitHub Actions:

- **Before:** 50 min × 100 builds/day × $0.008/min = $40/day
- **After:** 15 min × 100 builds/day × $0.008/min = $12/day
- **Savings:** $840/month

## Key Takeaways

1. **Measure first** - Profile your pipeline to find bottlenecks
2. **Parallelize aggressively** - Most stages can run concurrently
3. **Cache everything** - Dependencies, layers, artifacts
4. **Fail fast** - Run quick checks before expensive ones
5. **Test smart** - Only test what changed (+ dependencies)
6. **Automate painful tasks** - Manifest generation, versioning, etc.

## What's Next?

We're exploring:
- **Distributed test execution** (split tests across machines)
- **Predictive test selection** (ML to predict which tests might fail)
- **Remote caching** (Bazel/Buck for even faster builds)

## Tools We Used

- **Docker Buildx** - Multi-platform builds
- **GitHub Actions Cache** - Dependency caching
- **Helm** - Manifest templating
- **Custom Scripts** - Change detection

---

*Fast CI/CD isn't just about speed—it's about developer happiness and shipping faster. Invest in your pipelines!*
    `,
    date: '2024-11-20',
    tags: ['CI/CD', 'DevOps', 'Automation', 'Docker', 'Kubernetes'],
    readTime: '8 min read',
    author: 'Abhimanyu Kumbhar',
  },
  {
    id: 'blog-4',
    title: 'Building Payment Features with Stripe: A Developer Guide',
    slug: 'stripe-payment-integration',
    excerpt: 'Practical guide to implementing virtual accounts, autopay, and scheduled payments using Stripe API in Python/Django applications.',
    content: `
# Building Payment Features with Stripe: A Developer Guide

At Inkle, we built a comprehensive payment system using Stripe that handles bank transfers, autopay, and scheduled payments. Here's everything I learned.

## The Requirements

Our application needed to:
1. Accept bank transfers from customers
2. Handle partial and overpayments gracefully
3. Support automatic payments using credits
4. Schedule future payments
5. Track payment status in real-time

## Architecture Overview

\`\`\`
Customer → Stripe Virtual Account → Webhook → Our Backend → Database
                                        ↓
                                   Reconciliation
\`\`\`

## Feature 1: Virtual Accounts for Bank Transfers

Virtual accounts allow customers to send bank transfers to unique account numbers that route to your Stripe account.

### Implementation

\`\`\`python
# models.py
class Customer(models.Model):
    email = models.EmailField(unique=True)
    stripe_customer_id = models.CharField(max_length=255)
    virtual_account_number = models.CharField(max_length=50, null=True)

class Payment(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    stripe_payment_intent_id = models.CharField(max_length=255)
    status = models.CharField(max_length=50)  # pending, succeeded, failed
    created_at = models.DateTimeField(auto_now_add=True)
\`\`\`

### Creating Virtual Accounts

\`\`\`python
# stripe_service.py
import stripe

def create_virtual_account(customer):
    # Create Stripe customer
    stripe_customer = stripe.Customer.create(
        email=customer.email,
        metadata={'internal_id': customer.id}
    )

    # Create financial account
    financial_account = stripe.treasury.FinancialAccount.create(
        supported_currencies=['usd'],
        features={
            'inbound_transfers': {'ach': {'requested': True}}
        }
    )

    # Get account number
    account_number = financial_account.financial_addresses[0].aba.account_number

    customer.stripe_customer_id = stripe_customer.id
    customer.virtual_account_number = account_number
    customer.save()

    return account_number
\`\`\`

## Feature 2: Handling Partial and Overpayments

Customers don't always send exact amounts. We needed to handle:
- **Underpayment:** Mark invoice as partially paid
- **Overpayment:** Credit the excess to customer balance
- **Exact payment:** Mark invoice as paid

### Implementation

\`\`\`python
# payment_handler.py
def process_bank_transfer(payment_intent):
    amount_received = payment_intent.amount / 100  # Stripe uses cents
    customer = Customer.objects.get(
        stripe_customer_id=payment_intent.customer
    )

    # Find pending invoices
    invoices = Invoice.objects.filter(
        customer=customer,
        status='pending'
    ).order_by('due_date')

    remaining_amount = amount_received

    for invoice in invoices:
        amount_due = invoice.amount_due

        if remaining_amount >= amount_due:
            # Full payment
            invoice.status = 'paid'
            invoice.paid_amount = amount_due
            remaining_amount -= amount_due
        else:
            # Partial payment
            invoice.status = 'partial'
            invoice.paid_amount += remaining_amount
            invoice.amount_due -= remaining_amount
            remaining_amount = 0

        invoice.save()

        if remaining_amount == 0:
            break

    # Handle overpayment
    if remaining_amount > 0:
        CustomerCredit.objects.create(
            customer=customer,
            amount=remaining_amount,
            source='overpayment',
            payment_intent_id=payment_intent.id
        )

        # Notify customer
        send_email(
            to=customer.email,
            subject='Credit Added to Your Account',
            body=f'$\{remaining_amount} has been added to your account credit.'
        )
\`\`\`

## Feature 3: Autopay with Credits

Allow customers to automatically use their credits for upcoming invoices.

### Implementation

\`\`\`python
# autopay.py
from celery import shared_task

@shared_task
def process_autopay():
    # Run daily
    customers_with_autopay = Customer.objects.filter(autopay_enabled=True)

    for customer in customers_with_autopay:
        # Get due invoices
        due_invoices = Invoice.objects.filter(
            customer=customer,
            due_date__lte=timezone.now(),
            status='pending'
        )

        # Get available credits
        credits = CustomerCredit.objects.filter(
            customer=customer,
            used=False
        ).aggregate(total=models.Sum('amount'))['total'] or 0

        if credits > 0:
            for invoice in due_invoices:
                if credits >= invoice.amount_due:
                    # Use credits
                    apply_credits_to_invoice(invoice, invoice.amount_due)
                    credits -= invoice.amount_due
                else:
                    # Partial payment with credits
                    apply_credits_to_invoice(invoice, credits)
                    credits = 0
                    break

def apply_credits_to_invoice(invoice, amount):
    # Deduct from credits
    credits = CustomerCredit.objects.filter(
        customer=invoice.customer,
        used=False
    ).order_by('created_at')

    remaining = amount
    for credit in credits:
        if credit.amount >= remaining:
            credit.amount -= remaining
            credit.save()
            remaining = 0
            break
        else:
            remaining -= credit.amount
            credit.used = True
            credit.save()

    # Update invoice
    invoice.paid_amount += amount
    if invoice.paid_amount >= invoice.total_amount:
        invoice.status = 'paid'
    else:
        invoice.status = 'partial'
    invoice.save()
\`\`\`

## Feature 4: Scheduled Payments

Schedule payments to be processed on specific dates.

### Implementation

\`\`\`python
# scheduled_payments.py
class ScheduledPayment(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    scheduled_date = models.DateTimeField()
    payment_method_id = models.CharField(max_length=255)
    status = models.CharField(max_length=50)  # scheduled, processing, completed, failed
    stripe_payment_intent_id = models.CharField(max_length=255, null=True)

# Process scheduled payments
@shared_task
def process_scheduled_payments():
    now = timezone.now()

    payments = ScheduledPayment.objects.filter(
        scheduled_date__lte=now,
        status='scheduled'
    )

    for payment in payments:
        try:
            payment.status = 'processing'
            payment.save()

            # Create payment intent
            intent = stripe.PaymentIntent.create(
                amount=int(payment.amount * 100),  # Convert to cents
                currency='usd',
                customer=payment.customer.stripe_customer_id,
                payment_method=payment.payment_method_id,
                confirm=True,
                metadata={'scheduled_payment_id': payment.id}
            )

            payment.stripe_payment_intent_id = intent.id
            payment.status = 'completed'
            payment.save()

        except stripe.error.CardError as e:
            payment.status = 'failed'
            payment.error_message = str(e)
            payment.save()

            # Notify customer
            notify_payment_failure(payment.customer, payment)
\`\`\`

## Feature 5: Webhook Handling

Real-time updates from Stripe.

### Implementation

\`\`\`python
# views.py
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
import stripe

@csrf_exempt
def stripe_webhook(request):
    payload = request.body
    sig_header = request.META['HTTP_STRIPE_SIGNATURE']

    try:
        event = stripe.Webhook.construct_event(
            payload, sig_header, settings.STRIPE_WEBHOOK_SECRET
        )
    except ValueError:
        return HttpResponse(status=400)
    except stripe.error.SignatureVerificationError:
        return HttpResponse(status=400)

    # Handle events
    if event['type'] == 'payment_intent.succeeded':
        payment_intent = event['data']['object']
        process_bank_transfer(payment_intent)

    elif event['type'] == 'payment_intent.payment_failed':
        payment_intent = event['data']['object']
        handle_payment_failure(payment_intent)

    elif event['type'] == 'customer.updated':
        customer = event['data']['object']
        sync_customer_data(customer)

    return HttpResponse(status=200)
\`\`\`

## Best Practices

### 1. Idempotency

Always use idempotency keys to prevent duplicate charges:

\`\`\`python
stripe.PaymentIntent.create(
    amount=5000,
    currency='usd',
    idempotency_key=f'invoice_{invoice.id}_payment'
)
\`\`\`

### 2. Error Handling

\`\`\`python
try:
    payment = stripe.PaymentIntent.create(...)
except stripe.error.CardError as e:
    # Card was declined
    logger.error(f"Card declined: {e.user_message}")
except stripe.error.RateLimitError as e:
    # Too many requests
    retry_with_backoff()
except stripe.error.APIError as e:
    # Stripe API issue
    logger.critical(f"Stripe API error: {e}")
\`\`\`

### 3. Testing

Use Stripe's test mode and test cards:

\`\`\`python
# settings.py
STRIPE_PUBLIC_KEY = os.getenv('STRIPE_PUBLIC_KEY')
STRIPE_SECRET_KEY = os.getenv('STRIPE_SECRET_KEY')

# Test cards
# 4242 4242 4242 4242 - Success
# 4000 0000 0000 9995 - Insufficient funds
# 4000 0000 0000 0002 - Declined
\`\`\`

## Results

After implementing these features:

- **User adoption:** 85% of customers used bank transfers
- **Payment success rate:** 96%
- **Overpayment handling:** Automated, reducing support queries by 40%
- **Autopay adoption:** 60% enabled autopay

## Key Takeaways

1. **Virtual accounts simplify bank transfers** - No manual reconciliation needed
2. **Handle edge cases** - Partial/overpayments happen more than you think
3. **Webhooks are critical** - Real-time updates improve UX
4. **Test thoroughly** - Use Stripe's test mode extensively
5. **Idempotency matters** - Prevent duplicate charges

---

*Stripe's API is powerful but requires careful implementation. Plan for edge cases and you'll build a robust payment system.*
    `,
    date: '2024-08-10',
    tags: ['Stripe', 'Python', 'Django', 'Payment Integration', 'FinTech'],
    readTime: '9 min read',
    author: 'Abhimanyu Kumbhar',
  },
];
