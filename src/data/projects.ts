import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'UPI Payment Processing System',
    slug: 'upi-payment-processing-system',
    description: 'Designed and scaled high-throughput UPI payment processing system handling millions of transactions. Built end-to-end tests and monitoring for critical payment flows.',
    content: `
# UPI Payment Processing System

A high-throughput, reliable payment processing system built at Razorpay to handle millions of UPI transactions daily.

## Overview

The UPI Payment Processing System is the backbone of Razorpay's UPI payment infrastructure, processing over **1.5 million transactions daily** with 99.99% uptime. Built using modern microservices architecture with Golang, Kafka, and Kubernetes.

## The Challenge

UPI (Unified Payments Interface) is India's real-time payment system that processes billions of transactions monthly. Building a system that can:

- Handle **10,000+ transactions per second** during peak hours
- Maintain **sub-200ms latency** for payment confirmations
- Ensure **zero data loss** even during failures
- Scale **10x during festival seasons** (Diwali, etc.)
- Guarantee **strong consistency** for financial data

## Architecture

### System Design

\`\`\`
                    ┌─────────────┐
                    │ Customer App│
                    └──────┬──────┘
                           │
                           ▼
                    ┌─────────────┐
                    │ API Gateway │
                    └──────┬──────┘
                           │
                           ▼
            ┌──────────────────────────┐
            │  Payment Service (Go)    │
            │  - Validate request      │
            │  - Create transaction    │
            │  - Call UPI Switch       │
            └──────┬───────────────┬───┘
                   │               │
                   │               ▼
                   │        ┌─────────────┐
                   │        │  UPI Switch │
                   │        │    (NPCI)   │
                   │        └─────────────┘
                   │
                   ▼
            ┌─────────────┐
            │ Kafka Queue │
            └──────┬──────┘
                   │
       ┌───────────┼───────────┐
       │           │           │
       ▼           ▼           ▼
┌──────────┐ ┌──────────┐ ┌──────────┐
│Reconcile │ │Analytics │ │Notifica- │
│ Service  │ │ Service  │ │   tion   │
└──────────┘ └──────────┘ └──────────┘
\`\`\`


### Key Components

**1. Payment Processing Service (Golang)**
- Handles incoming payment requests
- Validates transaction data
- Communicates with NPCI UPI Switch
- Processes callbacks and confirmations

**2. Event Streaming (Kafka)**
- Decouples payment flow from downstream services
- Guarantees at-least-once delivery
- Enables real-time analytics and monitoring

**3. Reconciliation Service**
- Matches payments with bank settlements
- Handles edge cases (timeouts, partial failures)
- Ensures financial accuracy

**4. Monitoring & Observability**
- Prometheus for metrics collection
- Grafana dashboards for visualization
- Custom alerting for anomalies

## Technical Implementation

### High-Performance Payment Handler

Built in Golang for maximum concurrency and minimal latency:

**Payment Processing Flow:**

\`\`\`
    Request → Validate → Create Txn → Call UPI Switch → Publish Event → Response
                │            │              │               │
                ▼            ▼              ▼               ▼
            [Fail Fast]  [DB Write]   [5s Timeout]    [Kafka Async]
\`\`\`
**Key Design Patterns:**
- Context-based timeouts (5s hard limit)
- Fail-fast validation before expensive operations
- Async event publishing via Kafka
- Idempotency keys for duplicate prevention
- Structured error handling with proper codes


### Kafka Event Pipeline

**Event Flow Architecture:**

\`\`\`
    Payment Service ──┐
                      │
                      ├──► Topic: payment.initiated ──► Notification Service
                      │                                  │
                      ├──► Topic: payment.confirmed ────┼──► Analytics Service
                      │                                  │
                      └──► Topic: payment.failed ───────┴──► Reconciliation Service
\`\`\`
**Guarantees:**
- At-least-once delivery (Kafka acks=all)
- Ordered processing per partition key (merchant_id)
- Consumer group for horizontal scaling
- Dead letter queue for poison messages


## End-to-End Testing

Developed comprehensive E2E tests covering all critical flows:

### Test Coverage

**Happy Path:**
- Successful payment initiation
- Callback processing
- Status updates
- Notifications

**Error Scenarios:**
- Timeout handling (5s, 10s, 30s)
- Network failures
- Insufficient funds
- Invalid VPA
- Duplicate transaction prevention

**Edge Cases:**
- Partial payments
- Split settlements
- Refund processing
- Concurrent transactions

### Sample Test Structure

**E2E Test Flow:**

\`\`\`
    Setup Test Environment
            │
            ▼
    Mock UPI Switch Responses
            │
            ▼
    Send Payment Request ──► Validate Response
            │                       │
            ▼                       ▼
    Poll for Status Updates    Check DB State
            │                       │
            ▼                       ▼
    Verify Kafka Events ────► Assert Final State
            │
            ▼
    Cleanup Test Data
\`\`\`
**Test Categories:**
- Unit tests: Business logic validation
- Integration tests: API + DB interactions
- E2E tests: Full payment flow with mocked NPCI
- Load tests: 10K TPS simulation
- Chaos tests: Random failure injection


## Monitoring & Observability

### Key Metrics Tracked

**Performance Metrics:**
- Request latency (p50, p95, p99)
- Throughput (requests/second)
- Success rate (%)
- Error rate by type

**Business Metrics:**
- Transaction volume
- Total payment value
- Success vs failure ratio
- Average transaction size

### Grafana Dashboards

Created real-time dashboards showing:
- Live transaction throughput
- Latency trends over time
- Error rate by error code
- Payment method distribution
- Geographic distribution

### Alerting Rules

**Alert Hierarchy:**

\`\`\`
    ┌─────────────────────────────────────┐
    │   CRITICAL (PagerDuty)              │
    │   - Error rate > 5%                 │
    │   - Latency p99 > 2s                │
    │   - Service down                    │
    └─────────────────────────────────────┘
                    │
    ┌─────────────────────────────────────┐
    │   WARNING (Slack)                   │
    │   - Error rate > 2%                 │
    │   - Latency p95 > 500ms             │
    │   - Queue depth > 1000              │
    └─────────────────────────────────────┘
                    │
    ┌─────────────────────────────────────┐
    │   INFO (Email)                      │
    │   - Deployment events               │
    │   - Scaling events                  │
    │   - Configuration changes           │
    └─────────────────────────────────────┘
\`\`\`
**Alert Response:**
- Auto-remediation for common issues (restart, scale)
- Runbooks linked in alert descriptions
- Escalation path defined per severity


## Canary Deployments

Implemented safe deployment strategy:

1. **Deploy to 5%** of traffic
2. **Monitor for 30 minutes**:
   - Error rates
   - Latency changes
   - Success rate
3. **Increase to 25%** if healthy
4. **Monitor for 1 hour**
5. **Full rollout** if all metrics green

This prevented a critical bug from affecting 59K transactions.

## Results & Impact

### Performance Improvements

- **Latency:** Optimized from 1.9s to **200ms** (90% reduction)
- **Throughput:** Scaled to handle **10x traffic** during peaks
- **Availability:** Achieved **99.99% uptime**
- **Cost:** Reduced per-transaction cost by **25%**

### Business Impact

- Processing **1.5M+ daily transactions**
- Supporting **10,000+ merchants**
- Handling **₹500 Cr+ monthly volume**
- Zero financial discrepancies

### Developer Experience

- **Deployment time:** 50min → 15min (70% reduction)
- **Mean time to recovery:** 45min → 10min
- **Incident rate:** Reduced by 60%

## Key Learnings

### 1. Design for Failure

Every component will fail eventually. Build retry logic, circuit breakers, and graceful degradation:

**Circuit Breaker Pattern:**

\`\`\`
    ┌─────────┐     Success     ┌─────────┐
    │  CLOSED │ ───────────────►│  CLOSED │
    │ (Normal)│                 │ (Normal)│
    └────┬────┘                 └─────────┘
         │
         │ Failure threshold reached
         │ (5 failures in 10s)
         ▼
    ┌─────────┐     Timeout     ┌──────────┐
    │  OPEN   │ ───────────────►│ HALF-OPEN│
    │(Blocked)│  (30 seconds)   │  (Test)  │
    └─────────┘                 └────┬─────┘
         ▲                           │
         │                           │ Success
         └───────────────────────────┘
\`\`\`
**Retry Strategy:**
- Exponential backoff: 100ms → 200ms → 400ms
- Max 3 retries for transient failures
- Jitter to prevent thundering herd
- Different strategies for different error types


### 2. Observability is Critical

You can't fix what you can't see. Instrument everything:
- Request/response logs
- Performance metrics
- Business metrics
- Error tracking

### 3. Test Realistic Scenarios

Load tests should mimic production:
- Same traffic patterns
- Same error rates
- Same latency distributions

### 4. Gradual Rollouts Save Lives

Canary deployments caught bugs that would have affected thousands of transactions.

### 5. Documentation Matters

Clear runbooks helped reduce MTTR significantly:
- Incident response guides
- Architecture diagrams
- API documentation
- Troubleshooting guides

## Technologies Used

- **Backend:** Golang, gRPC
- **Message Queue:** Apache Kafka
- **Database:** PostgreSQL (with read replicas)
- **Cache:** Redis
- **Orchestration:** Kubernetes
- **Monitoring:** Prometheus, Grafana
- **CI/CD:** Jenkins, ArgoCD
- **Cloud:** AWS (EC2, RDS, ElastiCache)

## Future Roadmap

1. **Multi-region deployment** for better availability
2. **ML-based fraud detection** using transaction patterns
3. **Sub-100ms latency** for instant payments
4. **Smart routing** to optimize success rates
5. **GraphQL APIs** for better developer experience

---

This project showcases the complexity and scale of building financial infrastructure that millions of Indians rely on daily.
    `,
    techStack: ['Golang', 'Kafka', 'Microservices', 'Prometheus', 'Grafana', 'Docker', 'Kubernetes'],
    category: 'professional',
    links: {},
    featured: true,
    duration: '2024 - Present',
    role: 'Lead Developer',
    team: '5 engineers',
    impact: [
      '1.5M+ daily transactions processed',
      '99.99% uptime maintained',
      '90% latency reduction (1.9s → 200ms)',
      '25% cost reduction per transaction',
    ],
  },
  {
    id: 'project-2',
    title: 'AWS Data Pipeline Recovery',
    slug: 'aws-data-pipeline-recovery',
    description: 'Resolved critical AWS incident affecting 59K UPI transactions by fixing Kafka-Firehose-Lambda-Redshift pipeline. Ensured data recovery and system stability.',
    content: `
# AWS Data Pipeline Recovery

Critical incident response and recovery of a data pipeline failure affecting 59,000 UPI transactions.

## Incident Overview

**Date:** January 15, 2025
**Time:** 2:14 AM IST
**Duration:** 2 hours 46 minutes
**Impact:** 59,000 transactions not recorded in data warehouse
**Status:** Fully recovered with zero data loss

## The Alert

Saturday night, 2:14 AM. Pager goes off. Our data warehouse ingestion dropped to zero. What should be processing 10,000+ transactions per hour showed nothing.

## System Architecture

Our data pipeline:

\`\`\`
    ┌──────────────┐
    │Payment Service│
    └───────┬──────┘
            │ (Publish Events)
            ▼
    ┌──────────────┐
    │ Kafka Topic  │
    │ (Partitioned)│
    └───────┬──────┘
            │ (Stream)
            ▼
    ┌──────────────┐
    │   Firehose   │
    │  (Batching)  │
    └───────┬──────┘
            │ (Invoke)
            ▼
    ┌──────────────┐
    │Lambda Function│
    │ (Transform)  │
    └───────┬──────┘
            │ (Write)
            ▼
    ┌──────────────┐
    │  S3 Bucket   │
    │  (Staging)   │
    └───────┬──────┘
            │ (COPY Command)
            ▼
    ┌──────────────┐
    │   Redshift   │
    │(Data Warehouse)
    └──────────────┘
\`\`\`

**Purpose:** Real-time analytics and business intelligence

**Normal Flow:**
1. Payment events published to Kafka
2. Firehose pulls from Kafka, batches records
3. Lambda transforms data (enrich, clean, format)
4. Transformed data written to S3
5. Redshift loads from S3 for analytics

## Investigation Timeline

### 2:14 AM - Alert Triggered

Datadog alert: "Data warehouse ingestion rate dropped below threshold"

### 2:19 AM - Initial Diagnosis

**Step 1: Check Kafka**

**Health Check Flow:**

\`\`\`
    kafka-consumer-groups --list
            │
            ▼
    Check consumer lag for data-pipeline-consumer
            │
            ├──► Lag: 0 messages (Kafka is healthy ✓)
            │
            ▼
    Problem is downstream, not Kafka
\`\`\`

**Step 2: Check Firehose Metrics**

AWS Console → Kinesis Firehose → Metrics:
- Incoming records: **10,000/min** ✓
- Records delivered to S3: **0** ✗
- Lambda invocations: **100% failure rate** ✗

**Root cause located:** Lambda function timing out

### 2:24 AM - Root Cause Analysis

**CloudWatch Logs:**

**Error Pattern Detected:**

    [ERROR] Task timed out after 3.00 seconds
    [ERROR] Task timed out after 3.00 seconds
    [ERROR] Task timed out after 3.00 seconds
    ... (repeated 10,000+ times)

**Stack Trace Points To:**
\`\`\`
    → Lambda function: data-transformer-v2
    → Function: enrichUserData()
    → External API call timing out
\`\`\`

**Git Blame Investigation:**

Recent deployment added user enrichment:

**The Problematic Change:**

\`\`\`
    Old Code (Fast):
        Transform data → Write to S3
        (50ms per batch)

    New Code (Slow):
        For each record in batch:
            → Call external API to enrich user data
            → Wait for response (2-3s each)
            → Transform data
        → Write to S3
        (100 records × 2.5s = 250 seconds!)
\`\`\`
**Batch Processing Multiplier Effect:**
- Single record: 2.5s (acceptable)
- 100 records sequentially: 250s (timeout at 3s!)
- Result: Every batch guaranteed to timeout


**Why it failed:**
- Lambda timeout: **3 seconds**
- External API latency: **2-3 seconds per call**
- Firehose sends **batches of 100+ records**
- Total time needed: **100 × 2.5s = 250 seconds**
- Result: **Guaranteed timeout** ✗

## Recovery Strategy

### Phase 1: Stop the Bleeding (5 minutes)

**Goal:** Restore data ingestion immediately

**Rollback Action:**

\`\`\`
    AWS Lambda Console
        │
        ├──► Find function: data-transformer-v2
        │
        ├──► Versions → Select previous version (v1.4.2)
        │
        ├──► Update alias: PROD → v1.4.2
        │
        └──► Test with sample payload → Success ✓
\`\`\`
**Verification:**
    Monitor Firehose metrics → Records flowing to S3 ✓

**Result:** Pipeline resumed at 2:29 AM (15 minutes after incident)

### Phase 2: Recover Lost Data (2 hours)

**Challenge:** 59,000 transactions stuck in Kafka (retention: 7 days)

**Solution:** Replay messages from Kafka with exact offsets

**Step 1: Calculate Offset Range**

**Offset Calculation:**

    Failure window: 02:14 AM - 02:29 AM (15 minutes)

    Query Kafka for offset range:
        Topic: payment-events
        Partition: 0-9 (10 partitions)

    Start offset: 1,234,567 (02:14 AM timestamp)
    End offset:   1,293,567 (02:29 AM timestamp)

    Total messages: 59,000


**Step 2: Create Temporary Recovery Pipeline**

**Recovery Architecture:**

\`\`\`
    ┌────────────────┐
    │ Recovery Script│
    │   (Python)     │
    └────────┬───────┘
             │
             ├──► Read from Kafka (offset range)
             │
             ├──► Transform data (simple, no enrichment)
             │
             ├──► Write directly to S3
             │
             └──► Trigger Redshift COPY command
\`\`\`
**Advantages:**
- Bypasses Firehose (faster, direct control)
- Simple transformation (no external API calls)
- Batch writes to S3 (5000 records per file)
- Parallel processing (10 workers, one per partition)


**Step 3: Execute Recovery**

**Execution Progress:**

\`\`\`
    02:29 AM - Start recovery script
        │
        ├──► Partition 0: [========] 5,900 records
        ├──► Partition 1: [========] 5,900 records
        ├──► Partition 2: [========] 5,900 records
        ├──► Partition 3: [========] 5,900 records
        ├──► Partition 4: [========] 5,900 records
        ├──► Partition 5: [========] 5,900 records
        ├──► Partition 6: [========] 5,900 records
        ├──► Partition 7: [========] 5,900 records
        ├──► Partition 8: [========] 5,900 records
        └──► Partition 9: [========] 5,900 records
        │
    04:45 AM - Recovery complete
        └──► Total: 59,000 records processed ✓
\`\`\`

**Duration:** 2 hours (limited by Firehose throughput)

### Phase 3: Validation (30 minutes)

**Verify data integrity in Redshift:**

**Validation Queries:**

    Query 1: Count transactions in failure window
        Expected: 59,000
        Actual:   59,000  ✓

    Query 2: Check for duplicates
        Expected: 0
        Actual:   0      ✓

    Query 3: Verify transaction IDs match Kafka
        Sample: 1000 random transactions
        Match rate: 100% ✓

    Query 4: Check data completeness
        NULL values: 0   ✓
        Invalid amounts: 0 ✓

**Final Validation:** All 59,000 transactions recovered successfully with 100% data integrity


## Prevention Measures

### 1. Increased Lambda Timeout

**Configuration Change:**

    Old: 3 seconds
    New: 30 seconds

    Reasoning:
        - Handles network latency spikes
        - Buffer for batch processing
        - Still short enough to fail fast


### 2. Added Duration Monitoring

**CloudWatch Alarms:**

    Alert Thresholds:
        WARNING:  Duration > 25 seconds (approaching limit)
        CRITICAL: Duration > 28 seconds (danger zone)

    Alert Flow:
        CloudWatch Metric → SNS Topic → Slack Channel
                                      → PagerDuty (critical only)

    Metrics Tracked:
        - Average duration per invocation
        - P95, P99 duration
        - Timeout rate (failures / total invocations)

### 3. Implemented Circuit Breaker

**Circuit Breaker for External API:**

\`\`\`
    Normal State (CLOSED):
        └──► Call enrichment API

    Failure Detection:
        └──► 5 timeouts in 10 seconds
             │
             ▼
        Circuit OPENS (API calls blocked)
             │
             ▼
        Use fallback: Skip enrichment, process anyway
             │
             ▼
        Wait 60 seconds (cooldown)
             │
             ▼
        Circuit HALF-OPEN (test with 1 request)
             │
             ├──► Success → Circuit CLOSED
             └──► Failure → Circuit OPEN (60s more)
\`\`\`
**Benefits:**
- Prevents cascade failures
- Processes data even without enrichment
- Auto-recovery when API is healthy


### 4. Moved Enrichment to Batch Job

**New Architecture - Decoupled Enrichment:**

\`\`\`
    Real-time Pipeline (Lambda):
        Kafka → Firehose → Lambda (simple transform) → S3 → Redshift
        [No external API calls, fast processing]

    Batch Enrichment (Scheduled Job):
        Every 15 minutes:
            │
            ├──► Query Redshift for unenriched records
            │
            ├──► Batch API calls (100 records at once)
            │
            ├──► Update Redshift with enriched data
            │
            └──► Retry failed enrichments
\`\`\`
**Advantages:**
- Real-time pipeline stays fast and reliable
- Enrichment doesn't block critical path
- Can retry enrichment failures without data loss
- Better API rate limit management


### 5. Created Runbook

Documented complete incident response procedure:

**Runbook: Data Pipeline Failure**

1. Check Kafka health
2. Check Firehose metrics
3. Check Lambda CloudWatch logs
4. Identify failure window
5. Rollback if recent deployment
6. Calculate recovery offset range
7. Run recovery script
8. Validate data in Redshift
9. Post-mortem within 24 hours

## Incident Timeline Summary

| Time | Event | Duration |
|------|-------|----------|
| 02:14 AM | Alert triggered | - |
| 02:19 AM | Root cause identified | 5 min |
| 02:24 AM | Lambda rolled back | 10 min |
| 02:29 AM | Pipeline resumed | 15 min |
| 04:45 AM | All data recovered | 2h 31m |
| 05:00 AM | Validation complete | 2h 46m |

**Total incident duration:** 2 hours 46 minutes
**Data loss:** 0 transactions ✓

## Key Learnings

### 1. Timeouts are Not Suggestions

Design around timeout constraints:
- Know your limits (3s in our case)
- Add buffer (use 2s max if timeout is 3s)
- Monitor approaching limits

### 2. External Dependencies Kill Performance

- Cache aggressively
- Use async/batch processing
- Implement circuit breakers
- Have fallback behavior

### 3. Kafka Retention Saves Lives

Without 7-day retention, we'd have lost 59K transactions permanently.

**Recommendation:** Set retention based on recovery SLA
- 1-day retention → 1-day recovery window
- 7-day retention → 7-day recovery window
### 4. Monitoring Should Be Proactive

Don't just alert on errors, alert on:
- Duration trends (approaching timeout)
- Throughput changes (sudden drops)
- Success rate degradation

### 5. Runbooks Are Invaluable

Writing the runbook during recovery helps future incidents:
- Clear step-by-step process
- Known commands and scripts
- Validation queries
- Contact information

## Technologies Used

- **Data Pipeline:** Kafka, Kinesis Firehose, AWS Lambda, S3, Redshift
- **Monitoring:** CloudWatch, Datadog
- **Recovery:** Go, Python
- **Validation:** SQL, custom scripts

## Results

- ✅ **Zero data loss** - All 59K transactions recovered
- ✅ **Quick response** - Root cause identified in 5 minutes
- ✅ **Fast recovery** - Pipeline restored in 15 minutes
- ✅ **Complete validation** - 100% data integrity verified
- ✅ **Prevention implemented** - Multiple safeguards added

---

This incident showcases the importance of observability, quick incident response, and building resilient data pipelines.
    `,
    techStack: ['AWS Lambda', 'Kafka', 'Firehose', 'Redshift', 'Golang', 'Python'],
    category: 'professional',
    links: {},
    featured: true,
    duration: '2 days (incident + recovery)',
    role: 'Incident Commander',
    impact: [
      '59,000 transactions recovered with zero data loss',
      'Pipeline restored in 15 minutes',
      'Implemented 5 prevention measures',
      'Created comprehensive runbook',
    ],
  },
  {
    id: 'project-3',
    title: 'CI/CD Pipeline Optimization for UPI Switch',
    slug: 'cicd-pipeline-optimization',
    description: 'Re-architected CI/CD pipeline for 51 deployables across 10+ microservices in mono-repo, reducing build time from 45+ minutes to 15-20 minutes and checks from 240+ to 54.',
    content: `
# CI/CD Pipeline Optimization for UPI Switch

Re-architected GitHub Actions CI/CD pipeline for UPI Switch mono-repo, achieving 60% faster builds and 77% fewer checks.

## The Problem

UPI Switch CI/CD pipeline was a massive bottleneck for the entire team:

**Scale of the Problem:**
- **51 deployables** across **10+ microservices** in a **mono-repo**
- **240+ GitHub Actions checks** per PR (one for each service)
- **45+ minute** total pipeline runs
- **Flaky retries** from connection drops during Docker builds
- **Maintenance nightmare**: Updating workflows required changing dozens of files

**Developer Impact:**
- Every PR was a slog waiting for 240+ checks to pass
- Slow feedback loops killed productivity
- Adding new services was extremely painful
- Connection failures caused frequent re-runs
- Teams blocked waiting for CI/CD

## Baseline Metrics

**Before optimization:**
- **Total checks:** 240+ per PR
- **Total time:** 45+ minutes
- **Deployables:** 51 services
- **Workflow files:** One per service (maintenance nightmare)
- **Flakiness:** High (connection timeouts, retries)
- **Cache hit rate:** Low (~40%)
- **Developer satisfaction:** 2/10

## Pipeline Analysis

**Original pipeline structure:**

Each of 51 deployables had its own GitHub Actions workflow, resulting in:

**Original Pipeline (Per PR):**

\`\`\`
    ┌──────────────────────────────────────────┐
    │   PR Created → 240+ Checks Triggered     │
    └─────────────────┬────────────────────────┘
                      │
        ┌─────────────┴─────────────┐
        │                           │
        ▼                           ▼
    Service 1 Workflow          Service 2 Workflow  ... (51 total)
        │                           │
        ├─► Checkout code           ├─► Checkout code
        ├─► Install Go              ├─► Install Go
        ├─► Download deps           ├─► Download deps (same as S1!)
        ├─► Build binary            ├─► Build binary
        ├─► Build Docker            ├─► Build Docker (from scratch!)
        ├─► Run tests               ├─► Run tests
        └─► Push to registry        └─► Push to registry

    Total: 51 workflows × ~45min = Nightmare!
\`\`\`

**Problems identified:**
1. **Redundant work:** Each service rebuilt the same Go dependencies
2. **No caching:** Base Docker images built from scratch every time
3. **Serial builds:** Services built one after another
4. **Flaky connections:** Docker registry timeouts caused failures
5. **No centralized config:** Adding a service required creating new workflow file

## Solution Architecture

### The New Approach

**Key insight:** Build once, package many times.

**New Optimized Pipeline:**

\`\`\`
    PR Created → 54 Checks (77% reduction!)
        │
        ├─► Job 1: Build All Binaries (ONE JOB)
        │      │
        │      ├─► Go build -o bin/service1 ./cmd/service1
        │      ├─► Go build -o bin/service2 ./cmd/service2
        │      ├─► ... (all 51 services)
        │      │
        │      └─► Upload artifacts (all binaries)
        │            │
        │            │
        │            ▼
        ├─► Job 2-15: Package Docker (PARALLEL - 14 workers)
        │      │
        │      ├─► Worker 1: Package services 1-4
        │      ├─► Worker 2: Package services 5-8
        │      ├─► Worker 3: Package services 9-12
        │      └─► ... (parallel execution)
        │
        ├─► Job 16: E2E Tests (parallel)
        │
        └─► Job 17: Quality Gates (linting, changed files only)

    Total: ~15-20 minutes (60% faster!)
\`\`\`

## Optimization Strategy

### 1. One-Shot Binary Builds

**The Game Changer:** Build all 51 binaries in a single job

**Build Strategy:**

\`\`\`
    Single Build Job:
        │
        ├─► Download Go modules ONCE
        │   (cached, shared across all services)
        │
        ├─► Parallel compilation (16 cores)
        │   │
        │   ├─► go build -ldflags "-s -w" -o bin/api-gateway ./cmd/api-gateway
        │   ├─► go build -ldflags "-s -w" -o bin/auth-service ./cmd/auth-service
        │   ├─► go build -ldflags "-s -w" -o bin/payment-processor ./cmd/payment-processor
        │   └─► ... (48 more services in parallel)
        │
        └─► Upload all 51 binaries as artifacts
            (Downloaded by parallel Docker packaging jobs)
\`\`\`
**Compilation Flags:**
- "-s -w": Strip debugging symbols (smaller binaries)
- Static linking: No runtime dependencies
- CGO_ENABLED=0: Pure Go, portable across Linux distros


**Benefits:**
- Go modules downloaded once (not 51 times)
- Dependencies cached with ~90% hit rate
- Parallel compilation using all CPU cores
- Static linking for smaller, portable binaries

**GitHub Actions Implementation:**

**Workflow Structure:**

    name: Build All Binaries

    steps:
      1. Checkout code
      2. Setup Go (with module caching)
      3. Restore Go module cache (~90% hit rate)
      4. Build all 51 services in parallel
      5. Upload binaries as artifacts

    Optimization Details:
      - Go cache key: go.sum hash
      - Artifacts stored for 1 day
      - Compressed upload (faster transfer)
      - Parallel builds use all 16 cores


**Impact:**
- Binary builds: 45 min → 5 min (with 90% cache hits)
- Docker packaging: Parallel 14 jobs = ~5 min total

### 2. Prebuilt Base Docker Image

**Problem:** Every Docker build started from scratch

**Solution:** Create and cache base image with common dependencies

**Base Image Dockerfile:**

    FROM alpine:3.18

    # Common dependencies for all services
    RUN apk add --no-cache \
        ca-certificates \
        tzdata \
        curl

    # Create non-root user
    RUN addgroup -g 1000 appuser && \
        adduser -D -u 1000 -G appuser appuser

    USER appuser
    WORKDIR /app

**Built Once, Used 51 Times:**

\`\`\`
    Base image: upi-switch-base:latest
        │
        ├─► Cached in Docker layer cache
        ├─► No downloads during service builds
        └─► All services extend this base
\`\`\`

**Service Dockerfile (now super fast):**

    FROM upi-switch-base:latest

    # Copy only the pre-built binary (from artifacts)
    COPY bin/api-gateway /app/service

    # Expose port
    EXPOSE 8080

    # Run the binary
    CMD ["/app/service"]

**Build Time Comparison:**

    Before (from scratch):
        Alpine download        30s
        Install dependencies   45s
        Go module download     3m
        Binary compilation     4m
        ──────────────────────
        Total:                ~8m per service

    After (with base + pre-built binary):
        Copy binary           5s
        Docker build          25s
        ──────────────────────
        Total:                ~30s per service (16x faster!)

**Impact:**
- Docker build time: 8 min → 30 seconds per service
- No repeated dependency installations
- Smaller final images (just binary + base)

### 3. Centralized Configuration

**Problem:** 51 separate workflow files to maintain

**Solution:** Single config file drives everything

**service_config.json Structure:**

    {
      "services": [
        {
          "name": "api-gateway",
          "path": "cmd/api-gateway",
          "port": 8080,
          "dependencies": ["auth-service", "payment-processor"]
        },
        {
          "name": "auth-service",
          "path": "cmd/auth-service",
          "port": 8081,
          "dependencies": []
        },
        ... (49 more services)
      ],
      "build_matrix": [
        {"worker": 1, "services": ["api-gateway", "auth-service", ...]},
        {"worker": 2, "services": ["payment-processor", ...]},
        ... (14 workers total)
      ]
    }

**Workflow reads config dynamically:**

\`\`\`
    Read service_config.json
        │
        ├─► Generate build matrix
        ├─► Determine changed services
        ├─► Skip unchanged services
        └─► Execute parallel jobs
\`\`\`

**Benefits:**
- Add new service: Just add one JSON entry
- Update all services: Change config once
- Clear service dependencies and grouping
- Easy to audit and review

### 4. Smart Retry Logic for Flaky Connections

**Problem:** Flaky Docker registry connections causing failures

**Solution:** Retry logic with exponential backoff

**Retry Strategy:**

\`\`\`
    Docker push attempt 1
        │
        ├─► Success → Done ✓
        │
        └─► Failure → Wait 2s
                │
                ├─► Retry attempt 2
                │   │
                │   ├─► Success → Done ✓
                │   │
                │   └─► Failure → Wait 4s
                │           │
                │           ├─► Retry attempt 3
                │           │   │
                │           │   ├─► Success → Done ✓
                │           │   │
                │           │   └─► Failure → Wait 8s
                │           │           │
                │           │           └─► Final attempt → Report failure ✗
\`\`\`
**Exponential Backoff:**
- Attempt 1: Immediate
- Attempt 2: 2s delay
- Attempt 3: 4s delay
- Attempt 4: 8s delay
- Max retries: 4
- Success rate: 80% improvement


**Impact:** Reduced flaky failures by 80%

### 5. Dedicated GitHub Runner

**Problem:** Shared GitHub runners had resource contention

**Solution:** Dedicated self-hosted runner for UPI Switch

**Runner Specs:**
- **16 CPU cores** for parallel Go compilation
- **32 GB RAM** for large builds
- **500 GB SSD** for Docker layer caching
- **Dedicated network** to avoid rate limits

**Benefits:**
- Consistent performance (no noisy neighbors)
- Persistent Docker layer cache
- Faster network to private registries
- No GitHub Actions minute costs



### 6. Test Only Changed Code

**Problem:** Running all tests even when only one file changed

**Solution:** Smart test selection

**Change Detection Flow:**

\`\`\`
    git diff origin/main...HEAD
        │
        ├─► Changed files: cmd/api-gateway/**, pkg/auth/**
        │
        ├─► Determine affected services:
        │   │
        │   ├─► Direct changes: api-gateway, auth library
        │   │
        │   └─► Reverse dependencies: services using pkg/auth
        │
        └─► Run tests ONLY for:
            ├─► api-gateway tests
            ├─► auth library tests
            └─► services depending on auth (5 services)
\`\`\`
**Test Execution:**

    Before (all tests):
        51 services × ~18s = 15 minutes

    After (changed only):
        7 services × ~18s = 3 minutes (80% savings for typical PR)


**Linting optimization:**

**Selective Linting:**

\`\`\`
    git diff --name-only origin/main...HEAD
        │
        ├─► Changed files:
        │   - cmd/api-gateway/main.go
        │   - pkg/auth/jwt.go
        │   - pkg/auth/jwt_test.go
        │
        └─► Run golangci-lint ONLY on these 3 files
            (instead of all 500+ files)
\`\`\`
**Lint Time:**

    Before: golangci-lint run ./...
        → All files: ~5 minutes

    After: golangci-lint run --new-from-rev=origin/main
        → Changed files only: ~30 seconds

**Impact:**
- Full test suite: 15 min → 3 min (for typical PRs)
- Linting: 5 min → 30 sec
### 5. Quality Gates (Saved: 5 minutes per failed build)

**Problem:** Wasting time on builds that will fail

**Solution:** Fast-fail checks first

**Quality Gate Pipeline:**

\`\`\`
    ┌────────────────────────────────┐
    │  Stage 1: Syntax & Formatting  │
    │  (30 seconds)                  │
    └──────────┬─────────────────────┘
               │ PASS
               ▼
    ┌────────────────────────────────┐
    │  Stage 2: Linting              │
    │  (3 minutes)                   │
    └──────────┬─────────────────────┘
               │ PASS
               ▼
    ┌────────────────────────────────┐
    │  Stage 3: Unit Tests           │
    │  (3 minutes)                   │
    └──────────┬─────────────────────┘
               │ PASS
               ▼
    ┌────────────────────────────────┐
    │  Stage 4: Build Binaries       │
    │  (10 minutes)                  │
    └──────────┬─────────────────────┘
               │ PASS
               ▼
    ┌────────────────────────────────┐
    │  Stage 5: Docker Build + E2E   │
    │  (7 minutes)                   │
    └────────────────────────────────┘
\`\`\`
**Fail Fast Benefits:**
- 60% of failures caught in first 2 minutes
- No wasted time on expensive builds
- Quick feedback to developers


**Linting Example:**

**Workflow Step:**

    name: Lint Code
    runs-on: self-hosted

    steps:
      - name: Quick syntax check
        run: gofmt -l . | tee /dev/stderr | wc -l | grep -q "^0$"
        # Fails immediately if formatting issues found

      - name: Run golangci-lint
        run: golangci-lint run --new-from-rev=origin/main

    # If either fails, entire workflow stops here
    # Saves ~15 minutes of wasted build time


**Impact:** Catch 60% of failures in first 2 minutes

### 6. Test Optimization (Saved: 4 minutes)

**Problem:** Slow database setup in tests

**Before (Slow):**

\`\`\`
    Each test:
        │
        ├─► Start Docker container (Postgres)
        ├─► Wait for healthy (5s)
        ├─► Run migrations (3s)
        ├─► Execute test (2s)
        └─► Teardown (2s)

        Total: ~12s per test × 50 tests = 10 minutes
\`\`\`

**After (Fast):**

\`\`\`
    Test suite setup (ONCE):
        │
        ├─► Start Docker container (Postgres)
        ├─► Wait for healthy (5s)
        └─► Run migrations (3s)

    Each test:
        │
        ├─► BEGIN TRANSACTION
        ├─► Execute test (2s)
        └─► ROLLBACK

        Total: 8s setup + (2s × 50 tests) = 1m 48s

    Teardown (ONCE):
        └─► Stop Docker container
\`\`\`
**Speedup:** 10 minutes → 2 minutes (5x faster!)

**Impact:** Test suite from 12 min → 8 min
### 7. Automated Manifest Generation (Saved: 2 minutes)

**Problem:** Manual Kubernetes manifest updates

**Solution:** Automated generation with Helm

**Helm Template Structure:**

\`\`\`
    templates/
        ├─► deployment.yaml (template with {{ .Values.image }})
        ├─► service.yaml
        └─► ingress.yaml

    values.yaml:
        image:
          repository: upi-switch/api-gateway
          tag: {{ .SHA }}
        replicas: 3
        resources:
          limits:
            memory: "512Mi"
            cpu: "500m"
\`\`\`
**Generation Flow:**

\`\`\`
    Docker build completes
        │
        ├─► Extract image SHA: sha256:abc123...
        │
        ├─► Update values.yaml with new SHA
        │
        ├─► Run: helm template ./charts > manifests/api-gateway.yaml
        │
        └─► Commit manifests/ to GitOps repo
\`\`\`

**GitHub Actions:**

**Workflow:**

    name: Update Kubernetes Manifests

    on:
      workflow_run:
        workflows: ["Docker Build"]
        types: [completed]

    steps:
      1. Checkout GitOps repo
      2. Update image tag in values.yaml
      3. Run helm template
      4. Commit & push to GitOps repo
      5. ArgoCD auto-syncs and deploys

**Result:**
- Zero manual manifest updates
- Automated, consistent deployments
- Full audit trail in Git


## Results

### Performance Improvements

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| **Total checks** | 240+ | 54 | **77% fewer** |
| **Total time** | 45+ min | 15-20 min | **60% faster** |
| **Binary builds** | 45 min | ~5 min | **89% faster** |
| **Docker packaging** | Serial | 14 parallel jobs | **~5 min** |
| **E2E tests** | Included in total | ~7 min | Parallelized |
| **Linting** | 5 min (all files) | ~3 min (changed) | 40% faster |
| **Cache hit rate** | ~40% | **~90%** | 2.25x better |
| **Flaky failures** | High | **80% reduced** | Retry logic |

### Timing Breakdown

**After optimization:**
1. **Binary builds:** ~10 minutes (with 90% cache hits)
2. **E2E tests:** ~7 minutes (parallel)
3. **Linting & quality:** ~3 minutes (changed files only)

**Total:** 15-20 minutes (depending on cache hits)

### Business Impact

**Developer Productivity:**
- **Feedback time:** 45 min → 15-20 min (**~50% faster**)
- **PR velocity:** Developers can merge faster
- **Context switching:** Less waiting means better flow
- **Developer satisfaction:** 2/10 → 9/10
**Operational Wins:**
- **MTTR reduced:** Faster debugging with 54 checks vs 240+
- **Scalability:** Adding services is now trivial (one JSON entry)
- **Reliability:** 80% reduction in flaky failures
- **Maintenance:** Centralized config vs 51 workflow files

**Cost Savings:**
- **Compute costs:** 60% reduction in CI/CD minutes
- **Developer time:** 30 min saved per PR × thousands of PRs/year
- **Infrastructure:** Dedicated runner paid for itself in 2 months

### Key Metrics

**Deployment Stats:**
- **51 deployables** across **10+ microservices**
- **3 container registries:** Harbor, APB ECR, Axis ECR
- **Thousands of builds** per month
- **Zero deployment failures** from CI issues post-optimization

## Architecture Deep Dive

### One-Shot Binary Build Process



### Parallel Packaging Strategy

14 parallel jobs, each handling ~3-4 services:



## Implementation Timeline

**Week 1-2:** Analysis and design
- Profiled existing pipeline bottlenecks
- Analyzed service dependencies
- Designed new architecture
- Created centralized config schema

**Week 3-4:** Core implementation
- Implemented one-shot binary builds
- Created prebuilt base image
- Set up dedicated runner
- Built retry logic

**Week 5:** Testing and refinement
- Tested with real PRs
- Tuned parallel job count (14 optimal)
- Optimized cache strategies
- Fixed edge cases

**Week 6:** Rollout and monitoring
- Gradual rollout to team
- Monitoring and alerting setup
- Documentation and training
- **Results:** 45 min → 15-20 min ✓
## Key Learnings

### 1. Build Once, Package Many

Don't rebuild the same code 51 times. Build all binaries in one shot, then package them in parallel.

**Impact:** Binary build time reduced from 45 min to 5 min

### 2. Cache Aggressively

With 90% cache hit rate, most builds skip compilation entirely:
- Go module cache (persistent on dedicated runner)
- Docker layer cache (local on runner)
- Binary cache between build and package stages

### 3. Centralize Configuration

One JSON file is easier to maintain than 51 YAML workflows:
- Single source of truth
- Easy to add services
- Clear dependencies
- Reviewable in one place

### 4. Fix Flakiness, Don't Accept It

Connection timeouts were killing productivity:
- Added retry logic with exponential backoff
- Dedicated runner eliminated rate limits
- Multi-registry push with fallback
- **Result:** 80% reduction in flaky failures

### 5. Measure Everything

Track metrics to prove improvements:
- Pipeline duration per stage
- Cache hit rates
- Failure rates by type
- Developer feedback

### 6. Parallelize Intelligently

Don't just run everything in parallel:
- **14 parallel packaging jobs** (optimal for our runner)
- **Sequential binary builds** (shared module cache)
- **Parallel tests** (independent services)

## Technical Details

**Static Linking for Smaller Images:**


**Multi-Registry Push Strategy:**


**Service Batching Logic:**
- Batch 1-3: Core services (payment, reconciliation)
- Batch 4-8: Supporting services (analytics, notifications)
- Batch 9-14: Auxiliary services (monitoring, tools)

## Team & Collaboration

**Contributors:**
- **Abhimanyu Kumbhar** - Architecture design, implementation lead
- **Anuj** - Testing strategy, retry logic
- **Soji Antony** - Multi-registry setup, deployment

**Cross-team impact:**
- 15+ developers benefiting daily
- 3 teams using the pipeline
- Dozens of PRs per day

## Technologies Used

- **CI/CD:** GitHub Actions (self-hosted runner)
- **Language:** Golang 1.21
- **Container Registries:** Harbor, AWS ECR (APB, Axis)
- **Build Tools:** go install, Docker
- **Caching:** GitHub Actions cache, Docker layers
- **Config:** JSON (centralized service config)
- **Scripting:** Bash

## Documentation & Resources

- **Image Build Spec:** Internal design doc
- **Overall CI Spec:** Architecture documentation
- **Service Config:** .github/service_config.json
- **Workflow Files:** .github/workflows/upi-switch-ci.yml

---

This project showcases building CI/CD infrastructure at scale for mono-repos with dozens of deployables, achieving dramatic improvements in speed, reliability, and maintainability.
    `,
    techStack: ['GitHub Actions', 'Golang', 'Docker', 'Harbor', 'AWS ECR', 'Bash'],
    category: 'professional',
    links: {},
    featured: true,
    duration: '6 weeks',
    role: 'Implementation Lead',
    team: '3 engineers (Abhimanyu Kumbhar, Anuj, Soji Antony)',
    impact: [
      '60% faster builds (45min → 15-20min)',
      '77% fewer checks (240+ → 54)',
      '90% cache hit rate achieved',
      '80% reduction in flaky failures',
      '51 deployables across 10+ microservices',
    ],
  },
  {
    id: 'project-4',
    title: 'Stripe Payment Integration',
    slug: 'stripe-payment-integration',
    description: 'Built comprehensive Stripe-powered bank transfer system with virtual accounts, autopay, and scheduled payments, significantly improving payment compliance and user retention.',
    content: `
# Stripe Payment Integration

Complete payment infrastructure built with Stripe API, handling virtual accounts, autopay, and scheduled payments.

## Project Overview

Built at Inkle to handle complex B2B payment workflows including bank transfers, automatic payments, and scheduled billing for US business compliance services.

## The Requirements

Our application needed to:
1. **Accept bank transfers** from customers
2. **Handle edge cases** - partial payments, overpayments gracefully
3. **Support autopay** using customer credits
4. **Schedule future payments** for recurring bills
5. **Track status** in real-time via webhooks
6. **Zero manual intervention** for reconciliation

## System Architecture

**Stripe Payment Flow:**

\`\`\`
    Customer Bank Account
            │
            ▼
    ┌─────────────────────┐
    │ Virtual Account     │
    │ (Stripe FinAcct)    │
    └──────────┬──────────┘
               │
               ▼
    ┌─────────────────────┐
    │ Stripe Webhook      │
    │ (payment received)  │
    └──────────┬──────────┘
               │
               ▼
    ┌─────────────────────┐
    │ Our Backend         │
    │ - Match payment     │
    │ - Update invoice    │
    │ - Handle credits    │
    └──────────┬──────────┘
               │
               ▼
    ┌─────────────────────┐
    │ Customer Notified   │
    │ (Email + Dashboard) │
    └─────────────────────┘
\`\`\`

## Feature 1: Virtual Accounts

Virtual accounts allow customers to send bank transfers to unique account numbers that route directly to your Stripe account.

### Why Virtual Accounts?

**Traditional approach:**
- Customer sends bank transfer to company account
- Manually match transfers to invoices
- Error-prone and time-consuming

**Virtual accounts:**
- Each customer gets unique account number
- Automatic matching via Stripe
- Real-time notifications
- Zero manual reconciliation

### Implementation

**Virtual Account Setup:**

\`\`\`
    Customer Onboarding
        │
        ├──► Create Stripe Customer
        │
        ├──► Create Financial Account
        │      │
        │      └──► Get unique routing + account number
        │
        ├──► Store in database
        │
        └──► Display to customer
\`\`\`
**Customer receives:**
- Routing number: 123456789
- Account number: Unique 10-digit number
- Instructions for bank transfer


### Creating Virtual Accounts

**API Flow:**

\`\`\`
    POST /api/stripe/create-virtual-account
        │
        ├──► Stripe API: Create Customer
        │
        ├──► Stripe API: Create Financial Account
        │    └──► Response: { routing_number, account_number }
        │
        ├──► Save to DB: customer_payment_methods table
        │
        └──► Return to frontend: Account details
\`\`\`
**Database Schema:**

    customer_payment_methods:
        - customer_id (FK)
        - stripe_customer_id
        - stripe_financial_account_id
        - routing_number
        - account_number
        - status (active/inactive)
        - created_at


## Feature 2: Smart Payment Reconciliation

Handle partial payments, overpayments, and exact payments automatically.

### The Challenge

Customers don't always send exact amounts:
- **Underpayment:** Customer sends $900 for $1000 invoice
- **Exact payment:** Customer sends $1000 for $1000 invoice
- **Overpayment:** Customer sends $1100 for $1000 invoice

### Solution

**Payment Reconciliation Logic:**

\`\`\`
    Webhook: payment.received ($\{amount})
        │
        ├──► Get pending invoices for customer
        │
        ├──► Compare: amount vs total_due
        │
        ├──────┬──────┬──────┐
        │      │      │      │
        ▼      ▼      ▼      ▼
    Exact  Under  Over  Multiple
        │      │      │    Invoices
        │      │      │      │
        ▼      ▼      ▼      ▼
    Mark   Apply  Apply  Apply to
    Paid   Partial Full + oldest first
           Payment Credit + update
                   balance remaining
\`\`\`
**Examples:**

    Scenario 1: Exact Payment
\`\`\`
        Invoice: $1000 | Payment: $1000
        → Invoice status: PAID ✓

    Scenario 2: Underpayment
        Invoice: $1000 | Payment: $900
        → Invoice status: PARTIAL ($100 remaining)

    Scenario 3: Overpayment
        Invoice: $1000 | Payment: $1100
        → Invoice status: PAID ✓
        → Customer credit: +$100
\`\`\`

## Feature 3: Autopay with Credits

Automatically use customer credits to pay invoices.

### Daily Autopay Job

**Autopay Workflow (runs daily at 2 AM UTC):**

\`\`\`
    Cron Job Triggered
        │
        ├──► Query: customers with autopay_enabled = true
        │
        ├──► For each customer:
        │    │
        │    ├──► Get pending invoices (due_date <= today)
        │    │
        │    ├──► Check customer credit balance
        │    │
        │    ├──────┬────────┐
        │    │      │        │
        │    ▼      ▼        ▼
        │  Credit  Credit  Insufficient
        │  >= Due  < Due   Credit
        │    │      │        │
        │    ▼      ▼        ▼
        │  Pay    Partial   Send
        │  Full   Payment   Reminder
        │    │      │        │
        │    └──────┴────────┘
        │           │
        └───────────┼────► Update invoice status
                    │
                    └────► Send notification
\`\`\`
**Credit Deduction:**

    Before: Customer credit = $500, Invoice = $300
    After:  Customer credit = $200, Invoice = PAID


## Feature 4: Scheduled Payments

Allow customers to schedule future payments.

**Scheduled Payment Flow:**

\`\`\`
    Customer Dashboard
        │
        ├──► Select invoice(s)
        │
        ├──► Choose payment date (future)
        │
        ├──► Confirm schedule
        │
        ▼
    Create scheduled_payments record:
        - invoice_id
        - customer_id
        - amount
        - scheduled_date
        - status: PENDING
\`\`\`
**Daily Processor (runs at 3 AM UTC):**

\`\`\`
    Query: scheduled_payments where scheduled_date = today
        │
        ├──► For each scheduled payment:
        │    │
        │    ├──► Check customer credit
        │    │
        │    ├─────┬─────┐
        │    │     │     │
        │    ▼     ▼     ▼
        │  Enough  Not   Process
        │  Credit  Enough Payment
        │    │      │
        │    ▼      ▼
        │  Deduct  Notify
        │  Credit  Customer
        │    │      │
        │    └──────┴────► Update status: COMPLETED/FAILED
\`\`\`

## Feature 5: Webhook Handling

Real-time event processing from Stripe.

**Webhook Processing Flow:**

\`\`\`
    Stripe Event Triggered
        │
        ▼
    POST /webhooks/stripe
        │
        ├──► Verify signature (security)
        │
        ├──► Parse event type
        │
        ├───────┬───────┬───────┬────────┐
        │       │       │       │        │
        ▼       ▼       ▼       ▼        ▼
    payment. charge. customer. payment_ financial_
    intent   failed  updated   method   account
    succeeded                 attached  updated
        │       │       │       │        │
        ▼       ▼       ▼       ▼        ▼
    Update  Notify  Update  Link to Update
    Invoice Customer Profile Customer Account
    Status                            Info
\`\`\`
**Event Types Handled:**

\`\`\`
    1. financial_account.payment.received
       → Match payment to invoice
       → Update invoice status
       → Handle credits

    2. charge.failed
       → Mark payment as failed
       → Notify customer
       → Retry logic

    3. customer.updated
       → Sync customer data

    4. payment_intent.succeeded
       → Confirm payment success
\`\`\`
**Idempotency:**

\`\`\`
    Each webhook has unique event_id
        │
        ├──► Check if already processed
        │    (lookup in processed_events table)
        │
        ├─────┬─────┐
        │     │     │
        ▼     ▼     ▼
      Found  Not   Process
            Found  Event
        │     │
        ▼     └────► Insert event_id
      Skip           into processed_events
    Processing
\`\`\`

## Results & Impact

### Adoption Metrics

- **User adoption:** **85%** of customers use bank transfers
- **Payment success rate:** **96%**
- **Autopay adoption:** **60%** enabled autopay
- **Support tickets:** **40% reduction** in payment-related queries

### Business Impact

- **Processing time:** Manual reconciliation **eliminated**
- **Overpayment handling:** **Automated**, zero manual intervention
- **Customer satisfaction:** **+25% improvement**
- **Revenue collection:** **15% faster** payment collection

### Technical Achievements

- **Zero data loss:** 100% accuracy in payment matching
- **Real-time updates:** < 1 second webhook processing
- **Scalability:** Handles 1000+ payments/day
- **Reliability:** 99.9% uptime

## Key Learnings

### 1. Idempotency is Critical

**Problem:** Webhooks can be sent multiple times

**Solution:** Idempotency keys ensure operations run only once

**Implementation:**

\`\`\`
    Webhook received with event_id: evt_123
        │
        ├──► Check: SELECT * FROM processed_events WHERE event_id = 'evt_123'
        │
        ├──────┬───────┐
        │      │       │
        ▼      ▼       ▼
      Exists Empty   Process
        │      │       │
        ▼      ▼       ▼
     Return  Insert  Execute
      200    evt_123 Business
             in DB   Logic
                      │
                      └──► Return 200
\`\`\`
**Benefits:**
- Duplicate webhooks don't cause duplicate payments
- Safe to retry failed webhooks
- Data consistency guaranteed


### 2. Handle All Edge Cases

- Partial payments
- Overpayments
- Duplicate webhooks
- Network timeouts
- Card declines

### 3. Test Thoroughly

Use Stripe's test mode extensively:

**Test Scenarios:**

\`\`\`
    1. Success Flow:
       └──► Test card: 4242 4242 4242 4242
            └──► Payment succeeds ✓

    2. Declined Card:
       └──► Test card: 4000 0000 0000 0002
            └──► Payment fails (card declined)

    3. Insufficient Funds:
       └──► Test card: 4000 0000 0000 9995
            └──► Payment fails (insufficient funds)

    4. Webhook Testing:
       └──► Stripe CLI: stripe listen --forward-to localhost:8000/webhooks
            └──► Trigger events manually
                 └──► Verify handling
\`\`\`
**Integration Tests:**

\`\`\`
    Test Suite Coverage:
        ├──► Virtual account creation
        ├──► Payment matching (exact, partial, over)
        ├──► Autopay execution
        ├──► Scheduled payments
        ├──► Webhook processing (all event types)
        └──► Idempotency checks
\`\`\`
### 4. Monitor Everything

- Payment success rates
- Webhook processing times
- Failed payment reasons
- Credit usage patterns

## Technologies Used

- **Payment Processing:** Stripe API
- **Backend:** Python, Django
- **Database:** PostgreSQL
- **Task Queue:** Celery, Redis
- **Monitoring:** Sentry, Datadog
- **Webhooks:** Stripe webhooks

---

This project showcases building production-grade payment infrastructure with complex business logic and edge case handling.
    `,
    techStack: ['Python', 'Django', 'Stripe API', 'PostgreSQL', 'Redis', 'Celery'],
    category: 'professional',
    links: {},
    duration: '6 months',
    role: 'Backend Lead',
    team: '3 engineers',
    impact: [
      '85% user adoption rate',
      '96% payment success rate',
      '40% reduction in support tickets',
      '15% faster revenue collection',
    ],
  },
  {
    id: 'project-5',
    title: 'Entity Registration Compliance App',
    slug: 'entity-registration-compliance-app',
    description: 'Developed app consolidating US state-specific entity registrations, automating compliance workflows and reducing manual regulatory effort by 70%.',
    content: `
# Entity Registration Compliance App

Automated US state-specific business entity registration system, reducing manual compliance work by 70%.

## Overview

Built at Inkle to automate the complex process of registering business entities across all 50 US states, each with unique requirements and regulations.

## The Problem

US businesses need to register in multiple states:
- **50 different states** = 50 different processes
- **Varying requirements** per state
- **Different forms** and documentation
- **Manual tracking** of deadlines and renewals
- **Hours of manual work** per registration

**Manual process:**
1. Research state requirements (2-3 hours)
2. Gather documents (1-2 hours)
3. Fill out forms (1-2 hours)
4. Submit and track (ongoing)
5. Handle renewals (annually)

**Total:** 6-8 hours per state, per registration

## Solution

Automated workflow engine that:
1. **Determines requirements** based on state and entity type
2. **Generates forms** automatically
3. **Validates data** against state rules
4. **Submits electronically** where possible
5. **Tracks deadlines** and sends reminders

## Architecture

**System Flow:**

\`\`\`
    Customer Input
        │
        ▼
    ┌────────────────────┐
    │ State Selection    │
    │ + Entity Type      │
    └─────────┬──────────┘
              │
              ▼
    ┌────────────────────┐
    │ Requirements Engine│
    │ (State-specific    │
    │  rules lookup)     │
    └─────────┬──────────┘
              │
              ▼
    ┌────────────────────┐
    │ Form Generator     │
    │ (PDF templates     │
    │  + data mapping)   │
    └─────────┬──────────┘
              │
              ▼
    ┌────────────────────┐
    │ Validation System  │
    │ (State-specific    │
    │  business rules)   │
    └─────────┬──────────┘
              │
              ▼
    ┌────────────────────┐
    │ Submission Queue   │
    │ + Tracking         │
    └────────────────────┘
\`\`\`

## Technical Implementation

### State Requirements Database

**Database Schema:**

    state_requirements:
        - state_code (CA, NY, TX, ...)
        - entity_type (LLC, Corp, S-Corp, ...)
        - required_fields (JSON array)
        - optional_fields (JSON array)
        - filing_fee
        - processing_time_days
        - renewal_period (annual, biennial)
        - submission_method (online, mail, both)

**Example for Delaware LLC:**

    {
      "state": "DE",
      "entity_type": "LLC",
      "required_fields": [
        "company_name",
        "registered_agent_name",
        "registered_agent_address",
        "member_names"
      ],
      "filing_fee": 90,
      "processing_time": "3-5 days",
      "renewal_period": "annual"
    }


### Rules Engine

**Rule Evaluation Flow:**

\`\`\`
    Input: { state: "CA", entity_type: "LLC", data: {...} }
        │
        ▼
    Load state_requirements for CA + LLC
        │
        ▼
    Apply conditional rules:
        │
        ├──► IF foreign LLC → require certificate of good standing
        ├──► IF has_employees → require EIN
        ├──► IF revenue > $1M → require financial statements
        └──► IF nonprofit → require articles of incorporation
\`\`\`
**Rule Definition (JSON):**

    {
      "rule_id": "ca_llc_001",
      "condition": "data.has_employees == true",
      "action": "require_field",
      "field": "employer_identification_number",
      "message": "EIN required for LLCs with employees in California"
    }

**Rule Processing:**

\`\`\`
    For each rule in state_requirements:
        │
        ├──► Evaluate condition
        │
        ├─────┬─────┐
        │     │     │
        ▼     ▼     ▼
      True  False Skip
        │
        ▼
    Execute action (add field, show warning, calculate fee)
\`\`\`

### Form Generator

**PDF Generation Flow:**

\`\`\`
    1. Load Template
        │
        ├──► PDF template for state/entity combo
        │    (e.g., CA_LLC_Form100.pdf)
        │
        ▼
    2. Map Data to Coordinates
        │
        ├──► Field mapping configuration:
        │    {
        │      "company_name": {"x": 120, "y": 450, "page": 1},
        │      "registered_agent": {"x": 120, "y": 380, "page": 1},
        │      ...
        │    }
        │
        ▼
    3. Fill Form Fields
        │
        ├──► Use PyPDF2 to write text at coordinates
        ├──► Apply font, size, alignment per field
        │
        ▼
    4. Generate Final PDF
        │
        └──► Save to S3, return download link
\`\`\`
**Template Management:**

\`\`\`
    templates/
        ├── CA/
        │   ├── LLC_Form100.pdf
        │   ├── Corp_Form200.pdf
        │   └── mapping.json
        ├── NY/
        │   ├── LLC_ArticlesOfOrg.pdf
        │   └── mapping.json
        └── ... (50 states)
\`\`\`

### Validation System

**Multi-Layer Validation:**

\`\`\`
    ┌─────────────────────┐
    │ Layer 1: Frontend   │
    │ - Format checking   │
    │ - Required fields   │
    │ - Real-time feedback│
    └──────────┬──────────┘
               │
               ▼
    ┌─────────────────────┐
    │ Layer 2: Backend    │
    │ - Business rules    │
    │ - State-specific    │
    │ - Cross-field logic │
    └──────────┬──────────┘
               │
               ▼
    ┌─────────────────────┐
    │ Layer 3: State API  │
    │ - Name availability │
    │ - EIN verification  │
    │ - Address validation│
    └─────────────────────┘
\`\`\`
**Validation Rules (California LLC Example):**

    company_name:
        - Must end with "LLC" or "Limited Liability Company"
        - Cannot contain restricted words (Bank, Insurance, etc.)
        - Must be unique (check with CA Secretary of State API)
        - Max length: 255 characters

    registered_agent:
        - Must have physical address in CA (no PO boxes)
        - Must be 18+ years old
        - Must accept service of process

    member_names:
        - At least 1 member required
        - Full legal names (first + last)
        - No duplicate members

**Validation Flow:**

\`\`\`
    User submits form
        │
        ├──► Run validations
        │
        ├──────┬──────┬──────┐
        │      │      │      │
        ▼      ▼      ▼      ▼
      Name  Address EIN  Custom
      Check  Valid   Valid Rules
        │      │      │      │
        └──────┴──────┴──────┘
               │
               ├──► All passed → Generate PDF
               └──► Any failed → Show errors
\`\`\`

### Workflow Automation

**Registration Workflow:**

\`\`\`
    ┌────────────────┐
    │ 1. Initiated   │
    │ (form created) │
    └────────┬───────┘
             │
             ▼
    ┌────────────────┐
    │ 2. Validating  │
    │ (rules engine) │
    └────────┬───────┘
             │
             ▼
    ┌────────────────┐
    │ 3. Generating  │
    │ (PDF creation) │
    └────────┬───────┘
             │
             ▼
    ┌────────────────┐
    │ 4. Pending     │
    │ Review         │
    └────────┬───────┘
             │
             ▼
    ┌────────────────┐
    │ 5. Submitted   │
    │ (to state)     │
    └────────┬───────┘
             │
             ▼
    ┌────────────────┐
    │ 6. Processing  │
    │ (state review) │
    └────────┬───────┘
             │
             ├──────┬──────┐
             │      │      │
             ▼      ▼      ▼
        Approved Rejected Resubmit
             │      │      │
             ▼      ▼      └──► Back to step 1
    ┌────────────────┐
    │ 7. Completed   │
    └────────────────┘
\`\`\`
**Automated Actions:**

\`\`\`
    State Transition → Trigger:
        │
        ├──► Initiated → Send confirmation email
        ├──► Validating → Run background checks
        ├──► Generating → Queue PDF job (Celery)
        ├──► Pending Review → Notify admin
        ├──► Submitted → Create tracking ticket
        ├──► Processing → Poll state API daily
        └──► Completed → Email certificate + invoice
\`\`\`
**Renewal Automation:**

\`\`\`
    Daily Cron Job (3 AM):
        │
        ├──► Query registrations expiring in 30 days
        │
        ├──► For each expiring registration:
        │    │
        │    ├──► Send reminder email
        │    ├──► Pre-fill renewal form
        │    └──► Generate draft invoice
        │
        └──► Repeat at 15 days, 7 days, 1 day
\`\`\`

## Results

### Efficiency Gains

\`\`\`
- **Manual effort:** 6-8 hours → **45 minutes** (85% reduction)
- **Error rate:** 15% → **<2%**
- **Processing time:** 3-5 days → **Same day** (form generation)
- **Cost per registration:** $150 → **$45** (70% reduction)
\`\`\`
### Business Impact

- **Registrations per month:** 50 → **200** (4x increase)
- **Customer satisfaction:** **+40%**
- **Support tickets:** **-60%** reduction
- **Revenue:** **+$50K/month** from increased capacity

### Scale Achievements

- **States supported:** All **50 states**
- **Entity types:** 8 (LLC, Corp, S-Corp, etc.)
- **Forms generated:** **3,000+ per month**
- **Success rate:** **98%**

## Key Features

### 1. State Selection & Requirements
- Interactive map for state selection
- Dynamic requirement list based on entity type
- Cost calculator with breakdown

### 2. Smart Form Filling
- Pre-filled data from previous registrations
- Auto-complete for common fields
- Real-time validation

### 3. Document Management
- Upload and store required documents
- PDF generation from templates
- Electronic signature support

### 4. Compliance Dashboard
- All registrations in one view
- Upcoming deadlines and reminders
- Status tracking per state

### 5. Renewal Automation
- Automatic renewal reminders
- Pre-filled renewal forms
- Payment processing

## Technologies Used

- **Backend:** Python, Django
- **Database:** PostgreSQL
- **PDF Processing:** ReportLab, PyPDF2
- **Task Queue:** Celery, Redis
- **Storage:** AWS S3
- **Notifications:** SendGrid, Twilio

## Challenges Overcome

### 1. State-Specific Rules

**Challenge:** Each state has unique requirements

**Solution:** Flexible rules engine with JSON-based configuration

### 2. Form Complexity

**Challenge:** 200+ different forms across states

**Solution:** Template system with coordinate mapping

### 3. Data Validation

**Challenge:** Different validation rules per state

**Solution:** Pluggable validator system

### 4. Deadline Tracking

**Challenge:** Different renewal schedules

**Solution:** Automated reminder system with Celery

---

This project demonstrates building a complex compliance automation system handling real-world regulatory requirements across multiple jurisdictions.
    `,
    techStack: ['Python', 'Django', 'JavaScript', 'PostgreSQL', 'Celery', 'AWS S3'],
    category: 'professional',
    links: {},
    duration: '8 months',
    role: 'Full Stack Developer',
    team: '4 engineers',
    impact: [
      '70% reduction in manual effort',
      '4x increase in monthly registrations',
      '85% faster processing time',
      '$50K/month revenue increase',
    ],
  },
  {
    id: 'project-6',
    title: 'Scalable Invoicing Tool',
    slug: 'scalable-invoicing-tool',
    description: 'Engineered invoicing platform with public sharing and dynamic views, reducing invoice-related queries by 40% and improving processing time.',
    content: `
# Scalable Invoicing Tool

Modern invoicing platform with public sharing, dynamic views, and automated workflows.

## Overview

Built at Inkle to handle complex B2B invoicing requirements for US business compliance services, supporting thousands of monthly invoices with zero manual processing.

## The Challenge

**Previous system:**
- Manual invoice creation (15 min per invoice)
- Email attachments (hard to track)
- No payment tracking
- Customer queries (200+ per month)
- No public invoice access
- PDF generation issues

## Solution

Built a comprehensive invoicing platform with:
- **Automated invoice generation** from services
- **Public shareable links** (no login required)
- **Real-time payment tracking**
- **Dynamic PDF generation**
- **Multi-currency support**
- **Automated reminders**

## System Architecture

**Invoicing Flow:**

\`\`\`
    Service Completed
        │
        ▼
    ┌─────────────────────┐
    │ Invoice Generator   │
    │ (Celery Task)       │
    └──────────┬──────────┘
               │
               ├──► Create invoice record (DB)
               │
               ├──► Generate PDF (WeasyPrint)
               │
               ├──► Upload to S3
               │
               ├──► Create public link (UUID)
               │
               ├──► Send email notification
               │
               └──► Add to payment queue
                        │
                        ▼
    ┌─────────────────────┐
    │ Customer Receives   │
    │ - Email with link   │
    │ - Public invoice URL│
    │ - Pay Now button    │
    └──────────┬──────────┘
               │
               ├──► View invoice (public page)
               │
               ├──► Pay via Stripe
               │
               ▼
    ┌─────────────────────┐
    │ Webhook Handler     │
    │ - Mark as paid      │
    │ - Update ledger     │
    │ - Send receipt      │
    └─────────────────────┘
\`\`\`

## Key Features Implemented

### 1. Automated Invoice Generation

**Trigger Event:**

\`\`\`
    Service Order Marked Complete
        │
        ▼
    Celery Task: generate_invoice.delay(order_id)
        │
        ├──► Fetch order details from DB
        │    - Customer info
        │    - Line items
        │    - Pricing
        │    - Tax calculations
        │
        ├──► Calculate totals:
        │    - Subtotal
        │    - Tax (based on state)
        │    - Discounts
        │    - Grand total
        │
        ├──► Create invoice record:
        │    - invoice_number (auto-increment)
        │    - due_date (terms: net-30)
        │    - status: PENDING
        │    - public_uuid (for shareable link)
        │
        ├──► Generate PDF (next section)
        │
        └──► Send notification email
\`\`\`
**Invoice Number Generation:**

    Format: INV-YYYY-MM-NNNN
    Example: INV-2025-03-0042

    Atomically increment counter per month
    Ensures unique, sequential numbers


### 2. Public Invoice View

**Public URL Structure:**

    https://invoices.inkle.io/v/{uuid}

    Example: https://invoices.inkle.io/v/a1b2c3d4-e5f6-7890-abcd-ef1234567890

**Access Flow:**

\`\`\`
    Customer clicks link
        │
        ├──► No authentication required ✓
        │
        ├──► Fetch invoice by UUID
        │    (UUID is unguessable, acts as secret)
        │
        ├──► Render public view:
        │    │
        │    ├──► Invoice details
        │    ├──► Line items
        │    ├──► Payment status
        │    ├──► Download PDF button
        │    └──► Pay Now button (if unpaid)
        │
        └──► Track view event (analytics)
\`\`\`
**Security:**

    - UUID v4: 128-bit random (impossible to guess)
    - Read-only access
    - No sensitive customer data exposed
    - Rate limiting: 100 requests/hour per IP
    - No edit/delete capabilities


### 3. Dynamic PDF Generation

**PDF Generation Pipeline:**

\`\`\`
    Invoice Data (JSON)
        │
        ▼
    HTML Template (Jinja2)
        │
        ├──► Company logo
        ├──► Invoice header (number, date, due date)
        ├──► Bill To / Bill From addresses
        ├──► Line items table
        ├──► Subtotal, tax, total
        └──► Payment instructions
        │
        ▼
    CSS Styling (Tailwind)
        │
        ├──► Professional layout
        ├──► Responsive sizing
        └──► Print-optimized
        │
        ▼
    WeasyPrint Renderer
        │
        ├──► Convert HTML+CSS to PDF
        ├──► Embed fonts
        └──► Optimize file size
        │
        ▼
    Upload to S3
        │
        ├──► Bucket: invoices-production
        ├──► Path: {year}/{month}/{invoice_id}.pdf
        └──► Public URL (signed, 24h expiry)
\`\`\`
**Template Example:**

    <!DOCTYPE html>
    <html>
    <head>
        <style>
            @page { size: A4; margin: 2cm; }
            .invoice-header { font-size: 24px; }
            .line-items { width: 100%; }
        </style>
    </head>
    <body>
        <div class="invoice-header">
            Invoice #{invoice.number}
        </div>
        <!-- ... rest of invoice HTML ... -->
    </body>
    </html>

**Performance:**

    Average generation time: 2-3 seconds
    Cached template compilation: Yes
    Parallel generation: Up to 10 workers


### 4. Payment Integration

**Payment Flow:**

\`\`\`
    Customer clicks "Pay Now"
        │
        ▼
    Stripe Checkout Session
        │
        ├──► Pre-filled amount
        ├──► Customer email
        └──► Success/cancel URLs
        │
        ▼
    Customer enters payment details
        │
        ├──► Card information
        ├──► Billing address
        │
        ▼
    Stripe processes payment
        │
        ├─────┬─────┐
        │     │     │
        ▼     ▼     ▼
    Success Fail  Partial
        │     │     │
        ▼     ▼     ▼
    Webhook Webhook Webhook
    Received Received Received
        │     │     │
        ▼     ▼     ▼
    Update  Notify  Apply
    Status  Customer Partial
    = PAID  Retry   + Track
        │     │     │
        ▼     ▼     ▼
    Send   Send    Send
    Receipt Failure Partial
    Email   Email   Receipt
\`\`\`
**Partial Payment Handling:**

    Invoice total: $1,000
\`\`\`
    Payment received: $700
        │
        ├──► Create payment record: $700
        ├──► Update invoice: amount_paid = $700
        ├──► Calculate remaining: $300
        └──► Status: PARTIALLY_PAID
\`\`\`

### 5. Automated Reminders

**Reminder Schedule:**

\`\`\`
    Daily Cron Job (9 AM UTC)
        │
        ├──► Query unpaid invoices
        │
        ├─────────┬─────────┬─────────┬─────────┐
        │         │         │         │         │
        ▼         ▼         ▼         ▼         ▼
    Due in  Due in  Due    1 day   7 days
    7 days  3 days  today  overdue overdue
        │         │         │         │         │
        ▼         ▼         ▼         ▼         ▼
    Friendly Gentle Polite Firm   Final
    Reminder Reminder Notice Warning Notice
        │         │         │         │         │
        └─────────┴─────────┴─────────┴─────────┘
                            │
                            ▼
                Send email via SendGrid
                            │
                            ├──► Track send event
                            └──► Log reminder in DB
\`\`\`
**Email Templates:**

    7 days before:
        Subject: "Invoice #{number} Due Next Week"
        Tone: Friendly reminder
        CTA: "View Invoice"

    Due today:
        Subject: "Invoice #{number} Due Today"
        Tone: Polite notification
        CTA: "Pay Now"

    1 day overdue:
        Subject: "Invoice #{number} Payment Overdue"
        Tone: Firm but professional
        CTA: "Pay Now to Avoid Late Fees"

    7 days overdue:
        Subject: "Final Notice: Invoice #{number}"
        Tone: Serious, mention consequences
        CTA: "Immediate Payment Required"

**Reminder Logic:**

    - Max 1 reminder per invoice per day
    - Stop reminders after payment
    - Pause reminders if payment plan agreed
    - Escalate to collections after 30 days overdue


### 6. Invoice Analytics

**Dashboard Metrics:**

\`\`\`
    ┌─────────────────────────────────┐
    │ Revenue Overview                │
    │                                 │
    │ Total Revenue:    $150,000      │
    │ Outstanding:      $45,000       │
    │ Overdue:          $12,000       │
    │ Collected:        $105,000      │
    └─────────────────────────────────┘

    ┌─────────────────────────────────┐
    │ Payment Statistics              │
    │                                 │
    │ Avg Days to Pay:  28 days       │
    │ Payment Rate:     89%            │
    │ Partial Payments: 12%            │
    │ Late Payments:    8%             │
    └─────────────────────────────────┘

    ┌─────────────────────────────────┐
    │ Invoice Breakdown               │
    │                                 │
    │ Paid:        150 (75%)          │
    │ Pending:      40 (20%)          │
    │ Overdue:      10 (5%)           │
    │ Total:       200                │
    └─────────────────────────────────┘
\`\`\`
**Real-Time Queries:**

    SELECT
        COUNT(*) FILTER (WHERE status = 'PAID') as paid,
        COUNT(*) FILTER (WHERE status = 'PENDING') as pending,
        COUNT(*) FILTER (WHERE status = 'OVERDUE') as overdue,
        SUM(amount) FILTER (WHERE status = 'PAID') as revenue,
        SUM(amount) FILTER (WHERE status = 'PENDING') as outstanding,
        AVG(paid_at - created_at) FILTER (WHERE status = 'PAID') as avg_days
    FROM invoices
    WHERE created_at >= NOW() - INTERVAL '30 days'

**Visualizations:**

    - Revenue trend (last 12 months)
    - Payment status pie chart
    - Top 10 customers by revenue
    - Aging report (0-30, 31-60, 61-90, 90+ days)
    - Payment method breakdown

**Export Options:**

    - CSV export for accounting
    - PDF summary report
    - QuickBooks integration (future)


## Results

### Efficiency Improvements

\`\`\`
- **Invoice creation time:** 15 min → **30 seconds** (96% faster)
- **PDF generation:** Manual → **Automated** (100%)
- **Payment tracking:** Manual → **Real-time**
- **Customer queries:** 200/month → **120/month** (40% reduction)
\`\`\`
### Business Impact

\`\`\`
- **Monthly invoices processed:** 500 → **2,000** (4x increase)
- **Collection time:** 45 days → **28 days** (38% faster)
- **Payment rate:** 75% → **89%** (+14%)
\`\`\`
- **Customer satisfaction:** **+35%**

### Cost Savings

- **Manual processing:** $5,000/month → **$500/month**
- **Support costs:** Reduced **60%**
- **Late payments:** Reduced **45%**

## Key Features

✅ **Automated invoice generation** from service orders
✅ **Public shareable links** (no login required)
✅ **Professional PDF generation** with branding
✅ **Online payment** via Stripe
✅ **Automated reminders** for due/overdue invoices
✅ **Real-time analytics** dashboard
✅ **Multi-currency** support
✅ **Partial payments** tracking
✅ **Custom branding** per customer
✅ **Email notifications** for all events

## Technologies Used

- **Backend:** Python, Django
- **Database:** PostgreSQL
- **PDF Generation:** WeasyPrint
- **Payment Processing:** Stripe API
- **Storage:** AWS S3
- **Email:** SendGrid
- **Frontend:** JavaScript, Tailwind CSS
- **Task Queue:** Celery, Redis

## Lessons Learned

### 1. Public Access Increases Payment Rate

Customers are 3x more likely to pay when they can access invoices without logging in.

### 2. Automated Reminders Work

Gentle reminders at 3 days before, 1 day overdue, and 7 days overdue reduced late payments by 45%.

### 3. PDF Quality Matters

Professional-looking PDFs improve brand perception and payment willingness.

### 4. Real-Time Tracking Reduces Support

Customers can see payment status themselves, reducing "Did you receive my payment?" queries.

---

This project showcases building a production-grade invoicing system that handles complex business workflows with automation and excellent UX.
    `,
    techStack: ['Python', 'Django', 'JavaScript', 'PostgreSQL', 'Redis', 'Stripe'],
    category: 'professional',
    links: {},
    duration: '5 months',
    role: 'Full Stack Developer',
    team: '3 engineers',
    impact: [
      '96% faster invoice creation',
      '40% reduction in customer queries',
      '38% faster payment collection',
      '4x increase in monthly invoices processed',
    ],
  },
];
