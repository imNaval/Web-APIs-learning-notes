# Web API
A **Web API** (Application Programming Interface) is a framework that enables communication between clients (e.g., mobile apps, browsers) and servers over the internet using HTTP protocols. It allows different software systems to exchange data or perform actions in a standardized way, typically using formats like JSON or XML. Web APIs are commonly used to build RESTful services, which are lightweight, scalable, and support cross-platform applications. For example, in an e-commerce app, a Web API might handle requests like fetching product details (`GET /api/products/123`) or creating orders (`POST /api/orders`). They are essential for modern applications, enabling seamless integration between frontends (e.g., React, Android) and backends, making development flexible and efficient. ASP.NET Web API is a popular choice for .NET developers to create such services.


**Overview**: These notes cover Web API and REST API interview questions, structured for comprehensive preparation. Questions are sourced from [InterviewBit Web API](https://www.interviewbit.com/web-api-interview-questions/)  [InterviewBit REST API](https://www.interviewbit.com/rest-api-interview-questions/) , and [GeeksforGeeks](https://www.geeksforgeeks.org/web-api-interview-questions-and-answers/) . Questions are categorized into Basic (~25), Intermediate (~35), and Advanced (~25). Approximately 30 important questions (`imp` tag) include 5-7 sentence explanations, real-world examples, and code snippets. Difficult questions (~35, mostly Advanced + some Intermediate) include code snippets. Remaining questions (~55) have 2-3 line detailed explanations.


---

## Basic Web API Questions
**Overview**: Basic questions cover foundational Web API concepts such as definitions, HTTP methods, and simple configurations, ideal for junior-level interviews.

**Key Points**:
- Web APIs enable HTTP-based services for client-server communication.
- RESTful APIs are lightweight and support JSON/XML formats.
- ASP.NET Web API is popular among .NET developers.

**Questions**:
1. **What is a Web API? [imp]**  
   **Answer**: A Web API is a framework that facilitates HTTP-based services, enabling data exchange between clients (e.g., mobile apps, browsers) and servers. It is ideal for RESTful services due to its lightweight, scalable nature and support for JSON/XML. Web APIs are critical in modern applications, such as fetching product catalogs in e-commerce platforms. They support cross-platform integration, allowing iOS, Android, and web apps to connect to a single backend. This is a foundational interview question as it tests understanding of API development’s core concept. **Example**: Amazon’s mobile app uses a Web API to fetch product details via `GET /api/products/123`.  
   ```csharp
   public class ProductsController : ApiController {
       [HttpGet]
       public IHttpActionResult GetProduct(int id) {
           var product = _repository.GetProduct(id);
           return Ok(product);
       }
   }
   ```
   _Explanation_: This GET endpoint returns product details for a given ID.

2. **What is the difference between Web API and WCF?**  
   **Answer**: Web API is simple, HTTP-focused, and designed for RESTful services with JSON/XML output, suitable for modern apps. WCF is more complex, supports SOAP and multiple protocols (TCP, HTTP), and is better for enterprise applications.

3. **What are the main HTTP methods in Web API? [imp]**  
   **Answer**: The primary HTTP methods in Web API are GET (retrieve data), POST (create resource), PUT (update resource), DELETE (remove resource), PATCH (partial update), and OPTIONS. These methods map to CRUD operations and form the foundation of RESTful API design. **Example**: In an e-commerce app, `GET /api/products` lists products, while `POST /api/orders` creates a new order.  
   ```http
   GET /api/products HTTP/1.1
   Host: api.example.com
   ```
   _Explanation_: This GET request fetches a list of products.

4. **What is CORS in Web API? [imp]**  
   **Answer**: Cross-Origin Resource Sharing (CORS) is a security feature that allows API requests from different domains, bypassing the browser’s same-origin policy. It is essential for modern apps where frontend and backend are hosted on separate domains. CORS headers (e.g., `Access-Control-Allow-Origin`) are set on the server to permit cross-origin calls. **Example**: A React app on `localhost:3000` requires CORS to call a Node.js API on `api.myapp.com`. Interviews often focus on CORS configuration and security implications.  
   ```csharp
   [EnableCors(origins: "http://localhost:3000", headers: "*", methods: "*")]
   public class UsersController : ApiController {
       [HttpGet]
       public IHttpActionResult GetUsers() {
           return Ok(_repository.GetUsers());
       }
   }
   ```
   _Explanation_: This enables CORS for a specific origin, allowing cross-origin requests.

5. **How do you enable CORS in ASP.NET Web API?**  
   **Answer**: To enable CORS, install the `Microsoft.AspNet.WebApi.Cors` NuGet package and apply the `[EnableCors]` attribute on controllers or configure it globally in `WebApiConfig` using `config.EnableCors()`. This ensures secure and controlled cross-origin requests.

6. **What is REST in Web API?**  
   **Answer**: REST (Representational State Transfer) is an architectural style that uses HTTP methods and URIs to create scalable APIs. It is stateless and based on client-server communication, ideal for modern applications.

7. **What is a RESTful API? [imp]**  
   **Answer**: A RESTful API adheres to REST principles, using HTTP methods (GET, POST, PUT, DELETE) for CRUD operations and URIs to identify resources (e.g., `/api/users`). It is stateless, with each request containing complete information. RESTful APIs are lightweight and scalable, widely used in applications like social media platforms. **Example**: Twitter’s API uses `GET /api/tweets` to return recent tweets. Interviews often test RESTful design principles.  
   ```http
   GET /api/tweets HTTP/1.1
   Host: api.twitter.com
   ```
   _Explanation_: This fetches the latest tweets.

8. **What is the difference between GET and POST?**  
   **Answer**: GET retrieves data with parameters in the URL and is idempotent. POST creates resources with parameters in the request body and is non-idempotent. These are core operations in REST APIs.

9. **What is JSON in Web API?**  
   **Answer**: JSON (JavaScript Object Notation) is a lightweight data format used as the default response format in Web APIs. It is human-readable and easy to parse, making it popular in modern applications.

10. **What is the role of HTTP status codes in Web API? [imp]**  
    **Answer**: HTTP status codes indicate the status of an API response, such as 200 (OK), 201 (Created), 400 (Bad Request), 404 (Not Found), or 500 (Server Error). They communicate success or error to clients, aiding debugging and user experience. **Example**: In an e-commerce API, `POST /api/orders` returns 201 on success.  
    ```csharp
    public IHttpActionResult CreateOrder(Order order) {
        if (order == null) return BadRequest();
        _repository.AddOrder(order);
        return Created($"/api/orders/{order.Id}", order);
    }
    ```
    _Explanation_: This returns 201 on success and 400 on invalid input.

11. **What is the Accept header in Web API?**  
    **Answer**: The Accept header specifies the client’s preferred response format, such as `application/json` or `application/xml`. It is used for content negotiation.

12. **What is the Content-Type header?**  
    **Answer**: The Content-Type header indicates the data format of the request or response, such as `application/json` or `application/xml`. It ensures proper data parsing between client and server.

13. **Why is Web API used in modern applications?**  
    **Answer**: Web APIs provide scalability, statelessness, and flexibility, enabling mobile apps, SPAs, and IoT devices to connect to servers. They simplify cross-platform development.

14. **What is the difference between SOAP and REST?**  
    **Answer**: SOAP is a protocol-based, complex, XML-focused standard, suitable for enterprise apps. REST is a simple architectural style using HTTP methods and JSON/XML, ideal for modern apps.

15. **What is an API endpoint?**  
    **Answer**: An API endpoint is a specific URL representing a resource or operation, such as `/api/users/1` for fetching a user. It is a core component of API structure.

16. **What is the purpose of the OPTIONS method in Web API?**  
    **Answer**: The OPTIONS method retrieves information about allowed HTTP methods and headers from the server. It is commonly used in CORS preflight requests for browser security.

17. **What is a query parameter in Web API?**  
    **Answer**: A query parameter passes data in the URL using `?key=value` format, such as `/api/users?role=admin` to filter admin users. It is widely used for filtering and sorting.

18. **What is the role of middleware in Web API?**  
    **Answer**: Middleware handles custom logic (e.g., logging, authentication) in the request pipeline before or after controller execution. It extends API functionality and behavior.

19. **What is a Web API controller?**  
    **Answer**: A controller is a class that handles HTTP requests and returns responses, such as `UsersController` managing user-related operations. It is central to API logic.

20. **What is the difference between monolithic and microservices architecture in APIs?**  
    **Answer**: Monolithic architecture integrates all components into a single application, limiting scalability. Microservices use independent APIs as services, offering flexibility and scalability.

21. **What is an API key?**  
    **Answer**: An API key is a unique identifier used for authentication, granting clients access to an API. It is a simple security mechanism, like in Google Maps API.

22. **What is the difference between REST and GraphQL?**  
    **Answer**: REST uses fixed endpoints and data structures, which can lead to over/under-fetching. GraphQL allows clients to create flexible queries via a single endpoint, improving data efficiency.

23. **What is the purpose of the Authorization header?**  
    **Answer**: The Authorization header passes authentication credentials (e.g., JWT, API key) to verify client identity. It is critical for API security.

24. **What is a payload in Web API?**  
    **Answer**: A payload is the data in a request or response, such as JSON data in a POST request or user details in a response. It is the core of API data exchange.

25. **What is the difference between a URI and a URL?**  
    **Answer**: A URI identifies a resource (path or name), such as `/users/1`. A URL specifies the resource’s location (protocol + path, e.g., `https://api.example.com/users`).

---

## Intermediate Web API Questions
**Overview**: Intermediate questions focus on technical implementation and practical scenarios, such as routing, authentication, and testing, critical for mid-level interviews.

**Key Points**:
- Routing maps requests to controller actions.
- Content negotiation determines response formats (JSON/XML).
- Authentication secures APIs.

**Questions**:
1. **What is routing in ASP.NET Web API? [imp]**  
   **Answer**: Routing maps HTTP requests to controller actions using URL patterns, defining API endpoints. ASP.NET Web API supports convention-based routing (via `WebApiConfig` templates) and attribute-based routing (using `[Route]` attributes). It is critical to ensure requests reach the correct endpoints, as incorrect routing can cause errors. **Example**: In a social media app, `GET /api/posts/123` fetches a specific post. Attribute routing offers flexibility for custom URLs. Interviews often explore routing configuration and conflict resolution.  
   ```csharp
   [Route("api/posts/{id}")]
   public IHttpActionResult GetPost(int id) {
       var post = _repository.GetPost(id);
       return Ok(post);
   }
   ```
   _Explanation_: This uses attribute routing to fetch a specific post.

2. **What is the difference between convention-based and attribute routing?**  
   **Answer**: Convention-based routing uses predefined templates in `WebApiConfig` (e.g., `api/{controller}/{id}`), which is simple but less flexible. Attribute routing uses `[Route("api/users/{id}")]` for custom, flexible routes, ideal for complex APIs.

3. **How do you enable attribute routing in Web API?**  
    **Answer**: Enable attribute routing by calling `config.MapHttpAttributeRoutes()` in `WebApiConfig` and using `[Route]` attributes on controller methods. This allows flexible endpoint design.

4. **What is content negotiation in Web API? [imp]**  
   **Answer**: Content negotiation allows clients and servers to agree on the response format (e.g., JSON, XML) based on the client’s `Accept` header. It makes APIs flexible by supporting multiple formats. ASP.NET Web API defaults to JSON but can return XML with additional formatters. **Example**: A mobile app may request JSON (`Accept: application/json`), while a legacy system prefers XML. Interviews focus on implementation and configuration.  
   ```http
   GET /api/users HTTP/1.1
   Host: api.example.com
   Accept: application/xml
   ```
   _Explanation_: The client requests an XML response.

5. **How do you return XML instead of JSON in Web API?**  
    **Answer**: Add an XML formatter in `WebApiConfig` (`config.Formatters.Add(new XmlMediaTypeFormatter())`) and set the client’s `Accept` header to `application/xml`. This enables XML output via content negotiation.

6. **What is the difference between authentication and authorization? [imp]**  
   **Answer**: Authentication verifies a user’s identity, such as checking a username/password or JWT token. Authorization determines a user’s permissions, like whether they can delete a resource. Both are critical for security to prevent unauthorized access and ensure proper permissions. **Example**: In an e-commerce app, authentication verifies login, while authorization ensures only admins can add products. Interviews test practical implementations.  
   ```csharp
   [Authorize(Roles = "Admin")]
   public IHttpActionResult DeleteProduct(int id) {
       _repository.DeleteProduct(id);
       return Ok();
   }
   ```
   _Explanation_: This restricts product deletion to users with the Admin role.

7. **How does JSON serialization work in Web API? [difficult]**  
   **Answer**: The JSON.NET library serializes objects into JSON format, with `JsonSerializerSettings` allowing customization of date formats and null handling. This converts complex objects into lightweight data, critical for API performance.  
   ```csharp
   public IHttpActionResult GetUser(int id) {
       var user = new User { Id = id, Name = "John", DateOfBirth = DateTime.Now };
       return Ok(user); // JSON.NET serializes to JSON
   }
   ```
   _Explanation_: This serializes a user object to JSON.

8. **What is the difference between PUT and PATCH? [imp]**  
   **Answer**: PUT updates an entire resource, requiring the client to send the complete resource state, and is idempotent. PATCH updates specific fields, making it efficient for partial updates, and may be non-idempotent. This distinction is key in RESTful API design for clear behavior. **Example**: In an e-commerce app, `PUT /api/users/1` updates the full user profile, while `PATCH /api/users/1` changes only the email. Interviews focus on use cases and idempotency.  
   ```http
   PATCH /api/users/1 HTTP/1.1
   Content-Type: application/json
   { "email": "new@email.com" }
   ```
   _Explanation_: This updates only the user’s email.

9. **How do you handle errors in Web API? [imp]**  
   **Answer**: Errors in Web API are handled using exception filters, `HttpResponseException`, or global middleware, returning standard responses (e.g., 400, 500). This ensures user-friendly and debuggable APIs. **Example**: In an e-commerce app, an invalid product ID returns `404 Not Found`. Global error handling provides consistent responses. Interviews explore error handling strategies.  
   ```csharp
   public IHttpActionResult GetProduct(int id) {
       var product = _repository.GetProduct(id);
       if (product == null) return NotFound();
       return Ok(product);
   }
   ```
   _Explanation_: This returns 404 for an invalid product ID.

10. **What tools are used for Web API testing?**  
    **Answer**: Tools like Postman, Swagger, Fiddler, and JMeter are used for testing API endpoints, responses, and performance. They validate functionality and ensure reliability.

11. **What is the purpose of the [HttpGet] attribute?**  
    **Answer**: The `[HttpGet]` attribute restricts a method to GET requests, ensuring only GET calls invoke it. This makes API behavior clear and predictable.

12. **How do you configure Web API to use HTTPS only?**  
    **Answer**: Set `<requireSSL>true</requireSSL>` in `Web.config` or configure HTTPS binding in IIS. This enforces encrypted communication for security.

13. **What is the role of OData in Web API? [difficult]**  
    **Answer**: OData enables queryable APIs, allowing clients to perform filtering, sorting, and pagination via URL queries. It simplifies complex data queries, popular in enterprise applications.  
    ```csharp
    [HttpGet]
    public IQueryable<Product> Get(ODataQueryOptions<Product> queryOptions) {
        return queryOptions.ApplyTo(_repository.GetProducts().AsQueryable());
    }
    ```
    _Explanation_: This applies an OData query to fetch products.

14. **How do you implement pagination in Web API? [imp]**  
    **Answer**: Pagination uses query parameters (e.g., `?page=1&size=10`) to return large datasets in chunks, improving performance by avoiding full data transfer. **Example**: In a social media app, `GET /api/posts?page=2&size=20` returns posts 21-40. Interviews test implementation details.  
    ```csharp
    public IHttpActionResult GetPosts(int page = 1, int size = 10) {
        var posts = _repository.GetPosts().Skip((page - 1) * size).Take(size);
        return Ok(posts);
    }
    ```
    _Explanation_: This returns paginated posts.

15. **What is the difference between unit testing and integration testing in Web API?**  
    **Answer**: Unit testing tests isolated components (e.g., controller methods) with mocked dependencies, making it fast and focused. Integration testing tests the full API flow, including databases and external services, for real-world scenarios.

16. **How do you mock dependencies in Web API unit tests? [difficult]**  
    **Answer**: The Moq library is used to mock services or repositories, injecting them into controllers for isolated, repeatable unit tests. This ensures reliable testing without external dependencies.  
    ```csharp
    [Fact]
    public async Task GetUser_ReturnsOk() {
        var mockService = new Mock<IUserService>();
        mockService.Setup(s => s.GetUser(1)).ReturnsAsync(new User { Id = 1 });
        var controller = new UsersController(mockService.Object);
        var result = await controller.GetUser(1);
        Assert.IsType<OkObjectResult>(result);
    }
    ```
    _Explanation_: This mocks a user service for unit testing.

17. **What is the purpose of the [FromBody] attribute?**  
    **Answer**: The `[FromBody]` attribute binds request body data (e.g., JSON) to a method parameter, commonly used in POST/PUT requests. It simplifies data handling.

18. **How do you handle query string parameters in Web API?**  
    **Answer**: Query string parameters are bound to method parameters using `[FromQuery]`, such as `public IActionResult GetUsers([FromQuery] int page, [FromQuery] int size)`. This is used for filtering and pagination.

19. **What is the role of dependency injection in Web API? [difficult]**  
    **Answer**: Dependency injection injects services or repositories into controllers, promoting loose coupling and testability. It improves code maintainability and scalability.  
    ```csharp
    public class UsersController : ApiController {
        private readonly IUserService _userService;
        public UsersController(IUserService userService) {
            _userService = userService;
        }
    }
    ```
    _Explanation_: This injects a user service into the controller.

20. **How do you implement logging in Web API?**  
    **Answer**: Logging is implemented using the `ILogger` interface or third-party libraries like Serilog or NLog to log requests, responses, and errors. This is critical for debugging and monitoring.

21. **What is the purpose of the [Route] attribute?**  
    **Answer**: The `[Route]` attribute defines custom URL patterns for attribute routing, such as `[Route("api/users/{id}")]`. It enables flexible endpoint design.

22. **How do you handle large file uploads in Web API? [difficult]**  
    **Answer**: Large file uploads are handled using `multipart/form-data` content type with streaming or buffering to optimize memory usage. This is essential for media-heavy applications.  
    ```csharp
    [HttpPost]
    public async Task<IHttpActionResult> UploadFile() {
        var stream = await Request.Content.ReadAsStreamAsync();
        // Save stream to storage
        return Ok();
    }
    ```
    _Explanation_: This handles file uploads via streaming.

23. **What is the difference between synchronous and asynchronous actions in Web API?**  
    **Answer**: Synchronous actions block threads, reducing scalability. Asynchronous actions (using `async/await`) are non-blocking, improving performance for high-traffic APIs.

24. **How do you implement caching in Web API? [imp]**  
    **Answer**: Caching is implemented using the `[ResponseCache]` attribute or in-memory caching (e.g., MemoryCache, Redis) to store frequent request responses, reducing server load. **Example**: In an e-commerce API, caching the product list avoids repeated database calls. Interviews test caching strategies.  
    ```csharp
    [HttpGet]
    [ResponseCache(Duration = 60)]
    public IHttpActionResult GetProducts() {
        var products = _repository.GetProducts();
        return Ok(products);
    }
    ```
    _Explanation_: This caches products for 60 seconds.

25. **What is the purpose of the [Authorize] attribute?**  
    **Answer**: The `[Authorize]` attribute restricts access to authenticated users, used for securing endpoints like admin-only operations. It enhances API security.

26. **How do you handle cross-site request forgery (CSRF) in Web API?**  
    **Answer**: CSRF is prevented using anti-forgery tokens or same-site cookies. This protects web apps interacting with APIs from unauthorized requests.

27. **What is the role of IActionResult return type?**  
    **Answer**: `IActionResult` allows flexible responses (e.g., `Ok`, `BadRequest`, `NotFound`) with HTTP status codes. It makes controller actions versatile.

28. **How do you implement model validation in Web API?**  
    **Answer**: Model validation uses data annotations (e.g., `[Required]`, `[StringLength]`) or custom validation attributes to ensure valid input. This prevents processing invalid data.

29. **What is the purpose of the [ApiController] attribute?**  
    **Answer**: The `[ApiController]` attribute enables automatic model validation, problem details, and attribute routing. It simplifies modern API development.

30. **How do you handle concurrent requests in Web API? [difficult]**  
    **Answer**: Concurrent requests are managed using `async/await`, thread-safe data structures, and database transactions to avoid conflicts. This is critical for high-traffic APIs.  
    ```csharp
    [HttpPost]
    public async Task<IHttpActionResult> UpdateStock(int productId, int quantity) {
        using (var transaction = _db.BeginTransaction()) {
            var product = await _db.Products.FindAsync(productId);
            product.Stock += quantity;
            await _db.SaveChangesAsync();
            transaction.Commit();
            return Ok(product);
        }
    }
    ```
    _Explanation_: This updates stock using a database transaction.

31. **What is the role of the Accept header in content negotiation?**  
    **Answer**: The `Accept` header specifies the client’s preferred response format (e.g., `application/json`), used by the server for content negotiation. It enhances API flexibility.

32. **How do you implement request timeout in Web API?**  
    **Answer**: Request timeouts are implemented using `HttpClient` timeout settings or `CancellationToken`. This manages issues with long-running requests.

33. **What is the difference between a Web API and a traditional MVC application?**  
    **Answer**: Web API returns data (JSON/XML) for client-side rendering, suitable for mobile apps. MVC returns views (HTML) for server-side rendering.

34. **How do you handle API documentation in Web API?**  
    **Answer**: API documentation is generated using Swagger/OpenAPI tools, describing endpoints and schemas. This simplifies API usage for developers.

35. **What is the purpose of the [Produces] attribute?**  
    **Answer**: The `[Produces]` attribute specifies the response content type, such as `[Produces("application/json")]` to ensure JSON output. It aligns client expectations.

---

## Advanced Web API Questions
**Overview**: Advanced questions cover complex scenarios, deep technical knowledge, and optimization, such as custom formatters, versioning, and performance tuning, suited for senior-level interviews.

**Key Points**:
- Custom formatters support new media types.
- Versioning manages API changes.
- Performance is enhanced through caching, async, and pagination.

**Questions**:
1. **How do you implement a custom media type formatter in Web API? [imp, difficult]**  
   **Answer**: A custom media type formatter is created by inheriting from `MediaTypeFormatter` and overriding methods like `CanReadType`, `CanWriteType`, and `WriteToStreamAsync`. It is registered in `WebApiConfig` (`config.Formatters.Add(new CustomFormatter())`). This supports niche formats like CSV. **Example**: An e-commerce API returns a product list in CSV for spreadsheet import. Interviews test practical implementation.  
   ```csharp
   public class CustomCsvFormatter : MediaTypeFormatter {
       public CustomCsvFormatter() {
           SupportedMediaTypes.Add(new MediaTypeHeaderValue("text/csv"));
       }
       public override bool CanWriteType(Type type) => type == typeof(IEnumerable<User>);
       public override async Task WriteToStreamAsync(Type type, object value, Stream writeStream, HttpContent content, TransportContext transportContext) {
           var users = (IEnumerable<User>)value;
           using (var writer = new StreamWriter(writeStream)) {
               await writer.WriteAsync("Id,Name\n");
               foreach (var user in users) {
                   await writer.WriteAsync($"{user.Id},{user.Name}\n");
               }
           }
       }
   }
   ```
   _Explanation_: This exports users in CSV format.

2. **How do you implement global error handling in Web API? [imp, difficult]**  
   **Answer**: Global error handling uses a custom exception filter inheriting from `ExceptionFilterAttribute`. The filter customizes error responses and is registered in `WebApiConfig` (`config.Filters.Add(new CustomExceptionFilter())`). This ensures consistent JSON error responses. **Example**: A social media API returns `{ "error": "Internal Server Error" }` for database failures. Interviews focus on implementation.  
   ```csharp
   public class CustomExceptionFilter : ExceptionFilterAttribute {
       public override void OnException(HttpActionExecutedContext context) {
           context.Response = new HttpResponseMessage(HttpStatusCode.InternalServerError) {
               Content = new StringContent("{\"error\": \"Internal Server Error\"}")
           };
       }
   }
   ```
   _Explanation_: This converts all exceptions to a standard error response.

3. **How do you implement versioning in a REST API? [imp, difficult]**  
   **Answer**: REST API versioning uses URL versioning (e.g., `/api/v1/users`), headers, or query parameters. URL versioning is simple and client-friendly. It maintains backward compatibility during breaking changes. **Example**: An e-commerce API uses `/api/v1/products` for the old schema and `/api/v2/products` for updates. Interviews explore strategies and client impact.  
   ```csharp
   [RoutePrefix("api/v1/users")]
   public class UsersV1Controller : ApiController {
       [Route("{id}")]
       public IHttpActionResult Get(int id) {
           var user = _repository.GetUser(id);
           return Ok(user);
       }
   }
   ```
   _Explanation_: This defines a version 1 users endpoint.

4. **How do you secure a Web API against common attacks? [imp, difficult]**  
   **Answer**: Secure APIs using HTTPS encryption, input validation, rate limiting, short-expiry JWTs, and secure headers (e.g., Content-Security-Policy). These measures prevent data breaches and unauthorized access. **Example**: A banking API uses parameterized queries to avoid SQL injection and rate limits to 100 requests/hour. Interviews test security best practices.  
   ```csharp
   public IActionResult Login(string username, string password) {
       if (ValidateCredentials(username, password)) {
           var token = GenerateJwtToken(username);
           return Ok(new { Token = token });
       }
       return Unauthorized();
   }
   ```
   _Explanation_: This generates a JWT token for secure login.

5. **How do you improve Web API performance? [imp, difficult]**  
   **Answer**: Improve performance using response caching, `async/await`, pagination, Gzip compression, and optimized database queries. These are essential for high-traffic APIs to reduce latency. **Example**: An e-commerce API uses pagination (`?page=1&size=20`) to lower response time. Interviews focus on optimization techniques.  
   ```csharp
   [HttpGet]
   [ResponseCache(Duration = 60)]
   public async Task<IActionResult> GetUsers(int page = 1, int size = 10) {
       var users = await _db.Users.Skip((page - 1) * size).Take(size).ToListAsync();
       return Ok(users);
   }
   ```
   _Explanation_: This returns paginated users with async and caching.

6. **What is HATEOAS in REST? [imp, difficult]**  
   **Answer**: HATEOAS (Hypermedia as the Engine of Application State) includes hyperlinks in REST responses to guide client navigation, reducing the need for prior API knowledge. **Example**: An e-commerce API returns `{ "id": 1, "name": "Laptop", "links": [{ "rel": "self", "href": "/api/products/1" }] }`. It enables dynamic API exploration. Interviews test implementation.  
   ```json
   {
       "id": 1,
       "name": "Laptop",
       "links": [
           { "rel": "self", "href": "/api/products/1" },
           { "rel": "category", "href": "/api/categories/electronics" }
       ]
   }
   ```
   _Explanation_: This provides navigation links with the resource.

7. **How do you implement rate limiting in Web API? [imp, difficult]**  
   **Answer**: Rate limiting is implemented using middleware like `AspNetCoreRateLimit`, tracking request counts per user or IP in Redis or in-memory stores. It prevents API abuse and DDoS attacks. **Example**: A social media API limits users to 100 requests/hour, returning 429 for excess requests. Interviews test setup details.  
   ```csharp
   services.AddRateLimiting(options => {
       options.AddFixedWindowLimiter("ApiLimit", opt => {
           opt.PermitLimit = 100;
           opt.Window = TimeSpan.FromHours(1);
       });
   });
   ```
   _Explanation_: This limits requests to 100 per hour.

8. **How do you unit test a Web API? [difficult]**  
   **Answer**: Unit testing uses xUnit/NUnit, with Moq to mock dependencies like services. Tests verify response status and data for reliability.  
   ```csharp
   [Fact]
   public async Task GetUser_ReturnsOk() {
       var mockService = new Mock<IUserService>();
       mockService.Setup(s => s.GetUser(1)).ReturnsAsync(new User { Id = 1, Name = "John" });
       var controller = new UsersController(mockService.Object);
       var result = await controller.GetUser(1);
       var okResult = Assert.IsType<OkObjectResult>(result);
       Assert.Equal("John", ((User)okResult.Value).Name);
   }
   ```
   _Explanation_: This tests a GET method with a mocked service.

9. **How do you implement API throttling? [difficult]**  
   **Answer**: API throttling uses middleware or tools like `AspNetCoreRateLimit` to control request rates based on user, IP, or endpoint. It prevents overuse and ensures fair usage.  
   ```csharp
   [HttpGet]
   [RateLimit(PermitLimit = 50, Window = "1h")]
   public IHttpActionResult GetData() {
       return Ok(_repository.GetData());
   }
   ```
   _Explanation_: This sets a 50 requests/hour limit for the endpoint.

10. **What is the role of async/await in Web API? [imp, difficult]**  
    **Answer**: `Async/await` enables non-blocking operations, freeing threads during I/O tasks (e.g., database calls), improving scalability for high-traffic APIs. **Example**: An e-commerce API uses async database queries to reduce latency. Interviews test benefits and pitfalls.  
    ```csharp
    [HttpGet]
    public async Task<IActionResult> GetUser(int id) {
        var user = await _db.Users.FindAsync(id);
        return user != null ? Ok(user) : NotFound();
    }
    ```
    _Explanation_: This fetches a user with an async database call.

11. **How do you handle backward compatibility in Web API? [difficult]**  
    **Answer**: Backward compatibility is maintained using versioning (e.g., `/api/v1`), default values for new fields, and deprecation warnings. This prevents breaking existing clients.  
    ```csharp
    [Route("api/v1/users/{id}")]
    public IHttpActionResult GetUser(int id) {
        var user = _repository.GetUser(id);
        return Ok(new { Id = user.Id, Name = user.Name }); // Old schema
    }
    ```
    _Explanation_: This maintains the version 1 schema.

12. **What is the role of cache-control headers in REST APIs? [difficult]**  
    **Answer**: Cache-control headers (e.g., `max-age`, `no-cache`) define caching behavior for responses, improving performance. They control client and server caching strategies.  
    ```http
    HTTP/1.1 200 OK
    Cache-Control: max-age=60
    ```
    _Explanation_: This makes the response cacheable for 60 seconds.

13. **How do you implement token-based authentication in Web API? [difficult]**  
    **Answer**: Token-based authentication uses JWT or OAuth, with tokens sent in the `Authorization` header. It provides secure, stateless authentication.  
    ```csharp
    [HttpGet]
    [Authorize]
    public IHttpActionResult GetSecureData() {
        return Ok(_repository.GetSecureData());
    }
    ```
    _Explanation_: This protects an endpoint with a JWT token.

14. **What is the difference between OAuth and OpenID Connect? [difficult]**  
    **Answer**: OAuth is for authorization, granting resource access (e.g., API access). OpenID Connect is for authentication, providing user identity, built on OAuth.  
    ```http
    GET /userinfo HTTP/1.1
    Authorization: Bearer <access_token>
    ```
    _Explanation_: This fetches user identity via OpenID Connect.

15. **How do you optimize database queries in Web API? [difficult]**  
    **Answer**: Optimize queries using indexes, query optimization, eager/lazy loading, and caching. This reduces response time and server load.  
    ```csharp
    public async Task<IHttpActionResult> GetProducts() {
        var products = await _db.Products
            .Where(p => p.IsActive)
            .Take(10)
            .ToListAsync();
        return Ok(products);
    }
    ```
    _Explanation_: This fetches active products with an optimized query.

16. **What is the role of the [FromQuery] attribute?**  
    **Answer**: The `[FromQuery]` attribute binds query string parameters to method parameters, such as `?page=1`. It is used for filtering and pagination.

17. **How do you implement request validation in Web API? [difficult]**  
    **Answer**: Request validation uses FluentValidation or custom middleware to validate data before processing. This protects the API from invalid input.  
    ```csharp
    public class UserValidator : AbstractValidator<User> {
        public UserValidator() {
            RuleFor(u => u.Email).NotEmpty().EmailAddress();
        }
    }
    ```
    _Explanation_: This validates the email in user input.

18. **What is the purpose of the [NonAction] attribute?**  
    **Answer**: The `[NonAction]` attribute prevents a method from being exposed as a public API endpoint, reserving it for internal use. It protects helper methods.

19. **How do you handle distributed transactions in Web API? [difficult]**  
    **Answer**: Distributed transactions are managed using the Saga pattern or two-phase commit across microservices. This ensures consistency in complex systems.  
    ```csharp
    [HttpPost]
    public async Task<IHttpActionResult> PlaceOrder(Order order) {
        await _orderService.CreateOrderAsync(order);
        await _inventoryService.UpdateStockAsync(order.Items);
        return Ok();
    }
    ```
    _Explanation_: This handles order and inventory updates with a Saga pattern.

20. **What is the role of the Problem Details specification in Web API? [difficult]**  
    **Answer**: The Problem Details specification (RFC 7807) provides standard JSON error responses, such as `{ "type": "error", "title": "Bad Request" }`. It ensures consistent, client-friendly error handling.  
    ```json
    {
        "type": "https://example.com/errors/bad-request",
        "title": "Bad Request",
        "status": 400,
        "detail": "Invalid input"
    }
    ```
    _Explanation_: This provides a standard error response format.

21. **How do you implement health checks in Web API? [difficult]**  
    **Answer**: Health checks are implemented using endpoints like `/health` or ASP.NET Core HealthChecks middleware to monitor API status. This ensures system reliability.  
    ```csharp
    app.UseHealthChecks("/health");
    ```
    _Explanation_: This configures a health check endpoint.

22. **What is the difference between a circuit breaker and retry pattern in Web API? [difficult]**  
    **Answer**: A circuit breaker stops requests after repeated failures, aiding system recovery. The retry pattern retries failed requests for temporary issues.  
    ```csharp
    public async Task<IHttpActionResult> CallExternalApi() {
        return await _circuitBreaker.ExecuteAsync(() => _httpClient.GetAsync("external-api"));
    }
    ```
    _Explanation_: This uses a circuit breaker for external API calls.

23. **How do you implement background tasks in Web API? [difficult]**  
    **Answer**: Background tasks are implemented using hosted services or `IHostedService` for tasks like scheduled jobs. They are suitable for long-running processes.  
    ```csharp
    public class ScheduledTask : BackgroundService {
        protected override async Task ExecuteAsync(CancellationToken stoppingToken) {
            while (!stoppingToken.IsCancellationRequested) {
                await Task.Delay(TimeSpan.FromHours(1), stoppingToken);
                // Run task
            }
        }
    }
    ```
    _Explanation_: This implements an hourly scheduled task.

24. **What is the role of the [Consumes] attribute?**  
    **Answer**: The `[Consumes]` attribute specifies the request content type, such as `[Consumes("application/json")]` to expect JSON input. It clarifies request validation.

25. **How do you handle API rate limiting for specific endpoints? [difficult]**  
    **Answer**: Endpoint-specific rate limiting is configured using middleware, such as `[RateLimit(PermitLimit = 50, Window = "1h")]`. This prevents overuse of specific endpoints.  
    ```csharp
    [HttpGet]
    [RateLimit(PermitLimit = 50, Window = "1h")]
    public IHttpActionResult GetData() {
        return Ok(_repository.GetData());
    }
    ```
    _Explanation_: This sets a 50 requests/hour limit for the endpoint.

