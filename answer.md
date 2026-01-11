# Question1: Node.js Architecture?

**JavaScript Engine(V8):**
   It compiles _JavaScript Machine code for fast execution_.

 **Node.js Core APIs:**
    These are the built in modules **(http, path, os, fs)** for system operations.

 **Native bindings:**
    javaScript alone cannot Access OS threads directly. Native Bindings are the bridge that allows **JavaScript code running in Node.js** to call native code written in c/c++.

 **Event Loop:**
    It Manages _Asynchronous Tasks efficiently_.Monitors the callStack and moves tasks from the queue to execution.


# Question2: libuv?

 **what is libuv?**
    libuv is a cross-platform C library that Provides an event loop,asynchronous I/O , and a **Threadpool** for Node.js

 **Why Node.js needs libuv?**
    Node.js need s libuv to:
    1. Perform non-blocking I/O
    2. Handle Os-level operations that JavaScript /V8 cannot.
    3. Work consistently across different opearting systems.

 **Responsibilities of libuv**
    1. It manages event loop
    2. Handles asynchronous I/O(file system, network,DNS)
    3. Maintains a thread pool for blocking tasks.
    4. Provides OS abstraction(Linux, Windows, macOs)

 # Question3: thread pool?

  **What is a thread pool?**
    A thread pool is a group of pre-created  background threads used to execute blocking or CPU-intensive tasks without blocking in main thread

  **Why Node.js uses a thread pool?**
    Node.js uses a thread pool to offload blocking operations so the single-threaded event loop remains non-blocking and responsive.

  **Which operations are handles by the thread pool?**
    It manages expensive operations like file I/O(fs) , DNS(dns.lookup) , and cryptographic functions and compression/depression(zlib)(default size is 4 threads).

 # Question4: Worker Threads?

  **What are worker threads?**
     Worker threads are separate JavaScript execution threads in Node.js that run JS code in parallel, each with its own event loop and memory.

  **Why are Worker Threads needed?**
     1.It Allows multithreading for CPU-intensive tasks.
     2.To achieve true-parallelism for JS code.
     3.To prevent blocking the main event loop

  **Difference between thread pool and worker threads?**
     Thread pool handles native blocking work, worker threads handle CPU-heavy Javascript in parallel.

 # Question5: Event Loop Queues?

   **Macro Task Queue?**
    Queue that holds **Asynchronous tasks scheduled by APIs like timers and I/O callbacks.**
    Ex: setTimeout, setInterval, setImmediate, I/O callbacks(file, network)
   **Micro Task Queue?**
    Queue that holds **high-priority callbacks that must run immediately after the current operation.**
    Ex: promise.then /catch/ finally, process.nexTick , queueMicrotask.
    **Execution Priority between them?**
    Micro Tasks always execute before the next macrotask.
