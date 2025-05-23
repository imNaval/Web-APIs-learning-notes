# Web API Interview Questions
 **Web API** ek aisa framework hai jo clients (jaise mobile apps, browsers) aur servers ke beech HTTP ke through baat-cheet karata hai. Ye alag-alag software systems ko data share ya kaam karne deta hai, mostly JSON ya XML format mein. RESTful services banane ke liye perfect hai kyunki ye lightweight aur scalable hota hai. **Example**: Ek e-commerce app mein, Web API product details fetch kar sakta hai (`GET /api/products/123`) ya naya order create kar sakta hai (`POST /api/orders`). Modern apps ke liye must hai, kyunki frontend (React, Android) aur backend ko easily connect karta hai, development ko flexible banata hai. .NET wale log ASP.NET Web API ka bada use karte hain iske liye. 😎


**Overview**: Ye notes Web API aur REST API ke interview questions cover karte hain. Questions [InterviewBit Web API](https://www.interviewbit.com/web-api-interview-questions/), [InterviewBit REST API](https://www.interviewbit.com/rest-api-interview-questions/), aur [GeeksforGeeks](https://www.geeksforgeeks.org/web-api-interview-questions-and-answers/) en sites k reference se liye gye h, aur kuch new trending questions (e.g., rate limiting, pagination) add kiye. Questions teen categories mein hain: Basic (~25), Intermediate (~35), Advanced (~25). ~30 important questions (`imp` tag) ke liye 5-7 sentence explanations, real-world examples, aur code snippets. Difficult questions (~30-35, mostly Advanced + kuch Intermediate) ke liye code snippets. Baaki questions ke liye 2-3 line detailed explanations.

---

## Basic Web API Questions
**Explanation**: Basic questions Web API ke core concepts jaise definition, HTTP methods, aur simple configurations cover karte hain. Ye junior-level interviews ke liye ideal hain.

**Key Points**:
- Web API HTTP services banata hai for client-server communication.
- RESTful APIs lightweight aur JSON/XML support karte hain.
- ASP.NET Web API .NET developers ke liye popular hai.

**Questions**:
1. **What is a Web API? [imp]**  
   **Answer**: Web API ek framework hai jo HTTP-based services banata hai, jisse clients (mobile apps, browsers) aur server data exchange karte hain. Ye RESTful services ke liye ideal hai kyunki lightweight, scalable, aur JSON/XML support karta hai. Modern apps mein critical hai, jaise e-commerce platforms mein product catalogs fetch karna. Ye cross-platform integration enable karta hai, jisse iOS, Android, ya web apps ek hi backend se connect ho sakein. Interviews mein ye foundational question hai kyunki API development ka core concept hai. **Example**: Amazon ka mobile app jab product details dikhata hai, toh `GET /api/products/123` Web API se data fetch karta hai.  
   ```csharp
   public class ProductsController : ApiController {
       [HttpGet]
       public IHttpActionResult GetProduct(int id) {
           var product = _repository.GetProduct(id);
           return Ok(product);
       }
   }
   ```
   _Explanation_: Ye simple GET endpoint product details return karta hai.

2. **What is the difference between Web API and WCF?**  
   **Answer**: Web API RESTful services ke liye simple aur HTTP-focused hai, JSON/XML deta hai, modern apps ke liye suitable. WCF complex hai, SOAP aur multiple protocols (TCP, HTTP) support karta hai, enterprise apps ke liye behtar.

3. **What are the main HTTP methods in Web API? [imp]**  
   **Answer**: Web API mein main HTTP methods hain: GET (data retrieve), POST (resource create), PUT (resource update), DELETE (resource remove), PATCH (partial update), aur OPTIONS. Ye CRUD operations ke liye use hote hain aur RESTful API design ka foundation hain. **Example**: Ek e-commerce app mein `GET /api/products` products list karta hai, jabki `POST /api/orders` naya order create karta hai.  
   ```http
   GET /api/products HTTP/1.1
   Host: api.example.com
   ```
   _Explanation_: Ye GET request products list fetch karta hai.

4. **What is CORS in Web API? [imp]**  
   **Answer**: CORS (Cross-Origin Resource Sharing) ek security feature hai jo different domains se API requests allow karta hai, browser ke same-origin policy ko bypass karke. Ye modern apps mein zaroori hai kyunki frontend aur backend alag domains par hote hain. CORS headers (e.g., `Access-Control-Allow-Origin`) server se set hote hain. **Example**: Ek React app (localhost:3000) se Node.js API (api.myapp.com) call karne ke liye CORS enable karna padta hai. Interviews mein configuration aur security implications pucha jata hai.  
   ```csharp
   [EnableCors(origins: "http://localhost:3000", headers: "*", methods: "*")]
   public class UsersController : ApiController {
       [HttpGet]
       public IHttpActionResult GetUsers() {
           return Ok(_repository.GetUsers());
       }
   }
   ```
   _Explanation_: Ye CORS enable karta hai specific origin ke liye.

5. **How do you enable CORS in ASP.NET Web API?**  
   **Answer**: CORS enable karne ke liye NuGet package `Microsoft.AspNet.WebApi.Cors` install karte hain, phir `[EnableCors]` attribute controller par ya WebApiConfig mein globally (`config.EnableCors()`) set karte hain. Ye cross-origin requests ko secure aur controlled way mein allow karta hai.

6. **What is REST in Web API?**  
   **Answer**: REST (Representational State Transfer) ek architectural style hai jo HTTP methods aur URIs use karta hai scalable APIs banane ke liye. Ye stateless aur client-server based hota hai, modern apps ke liye ideal.

7. **What is a RESTful API? [imp]**  
   **Answer**: RESTful API REST principles follow karti hai, HTTP methods (GET, POST, PUT, DELETE) se CRUD operations karti hai, aur resources URIs se identify hote hain (e.g., `/api/users`). Ye stateless hoti hai, har request mein complete info hoti hai. RESTful APIs lightweight aur scalable hote hain, widely used hain. **Example**: Twitter ka API `GET /api/tweets` latest tweets return karta hai. Interviews mein design principles pucha jata hai.  
   ```http
   GET /api/tweets HTTP/1.1
   Host: api.twitter.com
   ```
   _Explanation_: Ye latest tweets fetch karta hai.

8. **What is the difference between GET and POST?**  
   **Answer**: GET data retrieve karta hai, parameters URL mein hote hain, aur idempotent hai. POST resource create karta hai, parameters body mein, non-idempotent hai. Ye REST API ke core operations hain.

9. **What is JSON in Web API?**  
   **Answer**: JSON (JavaScript Object Notation) ek lightweight data format hai jo Web API mein default response format hota hai. Ye human-readable aur easy to parse hai, modern apps mein popular.

10. **What is the role of HTTP status codes in Web API? [imp]**  
    **Answer**: HTTP status codes API response ka status batate hain, jaise 200 (OK), 201 (Created), 400 (Bad Request), 404 (Not Found), 500 (Server Error). Ye client ko success ya error communicate karte hain, debugging aur user experience ke liye critical. **Example**: Ek e-commerce API mein `POST /api/orders` success par 201 return karta hai.  
    ```csharp
    public IHttpActionResult CreateOrder(Order order) {
        if (order == null) return BadRequest();
        _repository.AddOrder(order);
        return Created($"/api/orders/{order.Id}", order);
    }
    ```
    _Explanation_: Ye success par 201 aur failure par 400 return karta hai.

11. **What is the Accept header in Web API?**  
    **Answer**: Accept header client batata hai ki wo kaun sa response format chahta hai, jaise `application/json` ya `application/xml`. Ye content negotiation ke liye use hota hai.

12. **What is the Content-Type header?**  
    **Answer**: Content-Type header request ya response ke data format batata hai, jaise `application/json` ya `application/xml`. Ye server aur client ke beech data parsing ke liye zaroori hai.

13. **Why is Web API used in modern applications?**  
    **Answer**: Web API scalability, statelessness, aur flexibility deta hai, jisse mobile apps, SPAs, aur IoT devices server se connect kar sakte hain. Ye cross-platform development ko simplify karta hai.

14. **What is the difference between SOAP and REST?**  
    **Answer**: SOAP protocol-based hai, complex aur XML-focused, enterprise apps ke liye suitable. REST architectural style hai, simple, HTTP methods aur JSON/XML use karta hai, modern apps ke liye behtar.

15. **What is an API endpoint?**  
    **Answer**: API endpoint ek specific URL hai jo resource ya operation represent karta hai, jaise `/api/users/1` ek user fetch karta hai. Ye API ke structure ka core part hai.

16. **What is the purpose of the OPTIONS method in Web API?**  
    **Answer**: OPTIONS method server se allowed HTTP methods aur headers ke bare mein info mangta hai. Ye CORS preflight requests ke liye use hota hai, browser security ke liye.

17. **What is a query parameter in Web API?**  
    **Answer**: Query parameter URL mein `?key=value` format mein data pass karta hai, jaise `/api/users?role=admin` admin users filter karta hai. Ye filtering aur sorting ke liye common hai.

18. **What is the role of middleware in Web API?**  
    **Answer**: Middleware request pipeline mein custom logic (jaise logging, authentication) handle karta hai before ya after controller execution. Ye API ke behavior ko extend karta hai.

19. **What is a Web API controller?**  
    **Answer**: Controller ek class hai jo HTTP requests handle karta hai aur responses return karta hai, jaise `UsersController` user-related operations manage karta hai. Ye API logic ka central part hai.

20. **What is the difference between monolithic and microservices architecture in APIs?**  
    **Answer**: Monolithic architecture mein sab components ek application mein hote hain, scalability limited hoti hai. Microservices mein alag-alag APIs independent services banate hain, flexible aur scalable.

21. **What is an API key?**  
    **Answer**: API key ek unique identifier hai jo authentication ke liye use hota hai, client ko API access dene ke liye. Ye simple security mechanism hai, jaise Google Maps API mein.

22. **What is the difference between REST and GraphQL?**  
    **Answer**: REST fixed endpoints aur data structures use karta hai, predictable lekin over/under-fetching ho sakta hai. GraphQL client ko flexible queries banane deta hai, single endpoint se, data efficiency ke liye.

23. **What is the purpose of the Authorization header?**  
    **Answer**: Authorization header authentication credentials (jaise JWT, API key) pass karta hai to verify client identity. Ye API security ke liye critical hai.

24. **What is a payload in Web API?**  
    **Answer**: Payload request ya response ka data hota hai, jaise POST request mein JSON data ya response mein user details. Ye API ke data exchange ka core part hai.

25. **What is the difference between a URI and a URL?**  
    **Answer**: URI resource identify karta hai (path ya name), jaise `/users/1`. URL resource ka location batata hai (protocol + path, jaise `https://api.example.com/users`), specific address ke liye.

---

## Intermediate Web API Questions
**Explanation**: Intermediate questions technical implementation aur practical scenarios jaise routing, authentication, aur testing cover karte hain. Ye mid-level interviews ke liye critical hain.

**Key Points**:
- Routing: Requests ko controller actions se map karta hai.
- Content negotiation: Response format (JSON/XML) decide karta hai.
- Authentication: API ko secure rakhta hai.

**Questions**:
1. **What is routing in ASP.NET Web API? [imp]**  
   **Answer**: Routing HTTP requests ko URL patterns ke through controller actions se map karta hai, jisse API endpoints define hote hain. ASP.NET Web API mein convention-based (WebApiConfig mein templates) aur attribute-based ([Route] attributes) routing hoti hai. Ye critical hai kyunki galat routing se requests wrong endpoints par jayenge. **Example**: Ek social media app mein `GET /api/posts/123` specific post fetch karta hai. Attribute routing custom URLs ke liye flexible hai. Interviews mein configuration aur route conflicts pucha jata hai.  
   ```csharp
   [Route("api/posts/{id}")]
   public IHttpActionResult GetPost(int id) {
       var post = _repository.GetPost(id);
       return Ok(post);
   }
   ```
   _Explanation_: Ye attribute routing se specific post fetch karta hai.

2. **What is the difference between convention-based and attribute routing?**  
   **Answer**: Convention-based routing WebApiConfig mein predefined templates (e.g., `api/{controller}/{id}`) use karta hai, simple lekin less flexible. Attribute routing [Route("api/users/{id}")] se custom routes deta hai, complex APIs ke liye behtar.

3. **How do you enable attribute routing in Web API?**  
   **Answer**: WebApiConfig mein `config.MapHttpAttributeRoutes()` call karte hain aur controller methods par [Route] attributes use karte hain. Ye custom routing enable karta hai, flexible endpoint design ke liye.

4. **What is content negotiation in Web API? [imp]**  
   **Answer**: Content negotiation client aur server ko response format (JSON, XML) decide karne deta hai based on client’s Accept header. Ye API ko flexible banata hai kyunki client apna preferred format choose kar sakta hai. ASP.NET Web API mein JSON default hota hai, lekin XML formatter add karke XML bhi return hota hai. **Example**: Ek mobile app JSON chahta hai (`Accept: application/json`), jabki legacy system XML prefer karta hai. Interviews mein implementation aur configuration pucha jata hai.  
   ```http
   GET /api/users HTTP/1.1
   Host: api.example.com
   Accept: application/xml
   ```
   _Explanation_: Client XML response mangta hai.

5. **How do you return XML instead of JSON in Web API?**  
   **Answer**: WebApiConfig mein XML formatter add karte hain (`config.Formatters.Add(new XmlMediaTypeFormatter())`) aur client ka Accept header `application/xml` set karte hain. Ye content negotiation ke through XML output deta hai.

6. **What is the difference between authentication and authorization? [imp]**  
   **Answer**: Authentication user ki identity verify karta hai, jaise username/password ya JWT token check karna. Authorization user ke permissions check karta hai, jaise kya user resource delete kar sakta hai. Ye security ke liye critical hain kyunki authentication ke bina koi bhi access kar sakta hai. **Example**: Ek e-commerce app mein authentication login verify karta hai, authorization ensure karta hai sirf admin products add kare. Interviews mein implementation pucha jata hai.  
   ```csharp
   [Authorize(Roles = "Admin")]
   public IHttpActionResult DeleteProduct(int id) {
       _repository.DeleteProduct(id);
       return Ok();
   }
   ```
   _Explanation_: Ye admin role wale users ko product delete karne deta hai.

7. **How does JSON serialization work in Web API? [difficult]**  
   **Answer**: JSON.NET library objects ko JSON format mein serialize karta hai, aur JsonSerializerSettings se date formats, null handling customize hota hai. Ye complex objects ko lightweight data format mein convert karta hai, API performance ke liye critical.  
   ```csharp
   public IHttpActionResult GetUser(int id) {
       var user = new User { Id = id, Name = "John", DateOfBirth = DateTime.Now };
       return Ok(user); // JSON.NET serializes to JSON
   }
   ```
   _Explanation_: Ye user object ko JSON mein serialize karta hai.

8. **What is the difference between PUT and PATCH? [imp]**  
   **Answer**: PUT pura resource update karta hai, client complete resource state bhejta hai, idempotent hota hai. PATCH specific fields update karta hai, partial updates ke liye efficient. Ye RESTful API design mein key hai kyunki sahi method ka use API behavior clear karta hai. **Example**: Ek e-commerce app mein `PUT /api/users/1` pura user profile update karta hai, jabki `PATCH /api/users/1` sirf email change karta hai. Interviews mein use cases aur idempotency pucha jata hai.  
   ```http
   PATCH /api/users/1 HTTP/1.1
   Content-Type: application/json
   { "email": "new@email.com" }
   ```
   _Explanation_: Ye sirf user ka email update karta hai.

9. **How do you handle errors in Web API? [imp]**  
   **Answer**: Web API mein errors ko exception filters, HttpResponseException, ya global middleware se handle karte hain, standard responses (e.g., 400, 500) return karte hain. Ye user-friendly aur debuggable API banata hai. **Example**: Ek e-commerce app mein invalid product ID par `404 Not Found` return hota hai. Global error handling consistent responses deta hai. Interviews mein strategies pucha jata hai.  
   ```csharp
   public IHttpActionResult GetProduct(int id) {
       var product = _repository.GetProduct(id);
       if (product == null) return NotFound();
       return Ok(product);
   }
   ```
   _Explanation_: Ye invalid ID par 404 return karta hai.

10. **What tools are used for Web API testing?**  
    **Answer**: Postman, Swagger, Fiddler, aur JMeter performance testing ke liye use hote hain. Ye tools API endpoints, responses, aur performance validate karte hain.

11. **What is the purpose of the [HttpGet] attribute?**  
    **Answer**: [HttpGet] attribute method ko GET requests tak restrict karta hai, ensuring sirf GET calls us method ko invoke karein. Ye API ke behavior ko clear aur predictable banata hai.

12. **How do you configure Web API to use HTTPS only?**  
    **Answer**: Web.config mein `<requireSSL>true</requireSSL>` set karte hain ya IIS mein HTTPS binding configure karte hain. Ye security ensure karta hai by enforcing encrypted communication.

13. **What is the role of OData in Web API? [difficult]**  
    **Answer**: OData queryable APIs banata hai, jisme clients filtering, sorting, pagination jaise operations URL queries se kar sakte hain. Ye complex data queries ko simplify karta hai, enterprise apps mein popular.  
    ```csharp
    [HttpGet]
    public IQueryable<Product> Get(ODataQueryOptions<Product> queryOptions) {
        return queryOptions.ApplyTo(_repository.GetProducts().AsQueryable());
    }
    ```
    _Explanation_: Ye OData query ko products par apply karta hai.

14. **How do you implement pagination in Web API? [imp]**  
    **Answer**: Pagination ke liye query params (e.g., `?page=1&size=10`) use karte hain taaki large datasets chunks mein return ho. Ye performance improve karta hai kyunki pura data ek baar mein nahi bheja jata. **Example**: Ek social media app mein `GET /api/posts?page=2&size=20` 21-40 posts return karta hai. Interviews mein implementation pucha jata hai.  
    ```csharp
    public IHttpActionResult GetPosts(int page = 1, int size = 10) {
        var posts = _repository.GetPosts().Skip((page - 1) * size).Take(size);
        return Ok(posts);
    }
    ```
    _Explanation_: Ye paginated posts return karta hai.

15. **What is the difference between unit testing and integration testing in Web API?**  
    **Answer**: Unit testing isolated components (e.g., controller method) test karta hai, dependencies mock karke, fast aur focused hota hai. Integration testing pura API flow (DB, external services) test karta hai, real-world scenarios ke liye.

16. **How do you mock dependencies in Web API unit tests? [difficult]**  
    **Answer**: Moq library se services ya repositories mock karke, controller mein inject karte hain. Ye unit tests ko isolated aur repeatable banata hai.  
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
    _Explanation_: Ye user service ko mock karta hai unit test ke liye.

17. **What is the purpose of the [FromBody] attribute?**  
    **Answer**: [FromBody] attribute request body se parameter bind karta hai, jaise JSON data ko model object mein convert karta hai. Ye POST/PUT requests ke liye common hai.

18. **How do you handle query string parameters in Web API?**  
    **Answer**: Method parameters mein query string values bind karte hain, jaise `public IActionResult GetUsers([FromQuery] int page, [FromQuery] int size)`. Ye filtering aur pagination ke liye use hota hai.

19. **What is the role of dependency injection in Web API? [difficult]**  
    **Answer**: Dependency injection services ya repositories ko controllers mein inject karta hai, loose coupling aur testability ke liye. Ye code maintainability aur scalability improve karta hai.  
    ```csharp
    public class UsersController : ApiController {
        private readonly IUserService _userService;
        public UsersController(IUserService userService) {
            _userService = userService;
        }
    }
    ```
    _Explanation_: Ye user service ko controller mein inject karta hai.

20. **How do you implement logging in Web API?**  
    **Answer**: ILogger interface ya third-party libraries (Serilog, NLog) use karke request, response, aur errors log karte hain. Ye debugging aur monitoring ke liye critical hai.

21. **What is the purpose of the [Route] attribute?**  
    **Answer**: [Route] attribute custom URL patterns define karta hai, attribute routing ke liye, jaise `[Route("api/users/{id}")]`. Ye flexible endpoint design enable karta hai.

22. **How do you handle large file uploads in Web API? [difficult]**  
    **Answer**: Multipart/form-data content type use karke, streaming ya buffering se large files handle karte hain, memory usage optimize karke. Ye media-heavy apps ke liye zaroori hai.  
    ```csharp
    [HttpPost]
    public async Task<IHttpActionResult> UploadFile() {
        var stream = await Request.Content.ReadAsStreamAsync();
        // Save stream to storage
        return Ok();
    }
    ```
    _Explanation_: Ye file upload ke liye stream handle karta hai.

23. **What is the difference between synchronous and asynchronous actions in Web API?**  
    **Answer**: Synchronous actions thread block karte hain, scalability kam hoti hai. Asynchronous actions (async/await) non-blocking hote hain, high-traffic APIs ke liye behtar.

24. **How do you implement caching in Web API? [imp]**  
    **Answer**: Caching ke liye `[ResponseCache]` attribute ya in-memory caching (MemoryCache, Redis) use karte hain taaki frequent requests ke responses store ho. Ye performance improve karta hai kyunki server load kam hota hai. **Example**: Ek e-commerce API mein product list cache karke repeated DB calls avoid hote hain. Interviews mein strategies pucha jata hai.  
    ```csharp
    [HttpGet]
    [ResponseCache(Duration = 60)]
    public IHttpActionResult GetProducts() {
        var products = _repository.GetProducts();
        return Ok(products);
    }
    ```
    _Explanation_: Ye 60 seconds ke liye products cache karta hai.

25. **What is the purpose of the [Authorize] attribute?**  
    **Answer**: [Authorize] attribute access ko restrict karta hai, sirf authenticated users ko allow karta hai. Ye security ke liye use hota hai, jaise admin-only endpoints ke liye.

26. **How do you handle cross-site request forgery (CSRF) in Web API?**  
    **Answer**: Anti-forgery tokens ya same-site cookies use karke CSRF attacks prevent karte hain. Ye web apps ke liye zaroori hai jo API ke saath interact karte hain.

27. **What is the role of IActionResult return type?**  
    **Answer**: IActionResult flexible responses (Ok, BadRequest, NotFound) return karta hai, HTTP status codes ke sath. Ye controller actions ko versatile banata hai.

28. **How do you implement model validation in Web API?**  
    **Answer**: Data annotations (e.g., `[Required]`, `[StringLength]`) ya custom validation attributes use karke model validate karte hain. Ye invalid input se bachata hai.

29. **What is the purpose of the [ApiController] attribute?**  
    **Answer**: [ApiController] attribute automatic model validation, problem details, aur attribute routing enable karta hai. Ye modern API development ko simplify karta hai.

30. **How do you handle concurrent requests in Web API? [difficult]**  
    **Answer**: Async/await, thread-safe data structures, aur database transactions use karke concurrency issues manage karte hain. Ye high-traffic APIs mein conflicts avoid karta hai.  
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
    _Explanation_: Ye database transaction ke saath stock update karta hai.

31. **What is the role of the Accept header in content negotiation?**  
    **Answer**: Accept header client ke preferred response format (e.g., `application/json`) batata hai, jo server content negotiation ke liye use karta hai. Ye API flexibility deta hai.

32. **How do you implement request timeout in Web API?**  
    **Answer**: HttpClient mein timeout settings ya CancellationToken use karke request timeout implement karte hain. Ye long-running requests ke issues ko manage karta hai.

33. **What is the difference between a Web API and a traditional MVC application?**  
    **Answer**: Web API data (JSON/XML) return karta hai, client-side rendering ke liye, jaise mobile apps ke liye. MVC views (HTML) return karta hai, server-side rendering ke liye.

34. **How do you handle API documentation in Web API?**  
    **Answer**: Swagger/OpenAPI tools use karke interactive API documentation generate karte hain, endpoints aur schemas describe karke. Ye developers ke liye API usage simplify karta hai.

35. **What is the purpose of the [Produces] attribute?**  
    **Answer**: [Produces] attribute response ke content type specify karta hai, jaise `[Produces("application/json")]` JSON output ensure karta hai. Ye client expectations align karta hai.

---

## Advanced Web API Questions
**Explanation**: Advanced questions complex scenarios, deep technical knowledge, aur optimization cover karte hain, jaise custom formatters, versioning, aur performance tuning. Ye senior-level interviews ke liye hain.

**Key Points**:
- Custom formatters: Naye media types support karte hain.
- Versioning: API changes manage karta hai.
- Performance: Caching, async, pagination se improve hoti hai.

**Questions**:
1. **How do you implement a custom media type formatter in Web API? [imp, difficult]**  
   **Answer**: Custom media type formatter banane ke liye `MediaTypeFormatter` class se inherit karte hain aur `CanReadType`, `CanWriteType`, `WriteToStreamAsync` methods override karte hain. Formatter ko WebApiConfig mein register karte hain. Ye niche formats (jaise CSV) support karne ke liye use hota hai. **Example**: Ek e-commerce API mein product list CSV format mein return karna, jisse clients spreadsheet mein import kar sakein. Interviews mein practical implementation pucha jata hai.  
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
   _Explanation_: Ye CSV format mein users export karta hai.

2. **How do you implement global error handling in Web API? [imp, difficult]**  
   **Answer**: Global error handling ke liye custom exception filter banate hain jo `ExceptionFilterAttribute` se inherit karta hai. Filter mein error response customize karte hain aur WebApiConfig mein register karte hain. Ye consistent JSON error responses ensure karta hai. **Example**: Ek social media API mein database failure ke liye `{ "error": "Internal Server Error" }` return hota hai. Interviews mein implementation pucha jata hai.  
   ```csharp
   public class CustomExceptionFilter : ExceptionFilterAttribute {
       public override void OnException(HttpActionExecutedContext context) {
           context.Response = new HttpResponseMessage(HttpStatusCode.InternalServerError) {
               Content = new StringContent("{\"error\": \"Internal Server Error\"}")
           };
       }
   }
   ```
   _Explanation_: Ye sab exceptions ko standard error response mein convert karta hai.

3. **How do you implement versioning in a REST API? [imp, difficult]**  
   **Answer**: REST API versioning ke liye URL versioning (e.g., `/api/v1/users`), headers, ya query params use karte hain. URL versioning simple aur client-friendly hai. Ye backward compatibility maintain karta hai jab API mein breaking changes hote hain. **Example**: Ek e-commerce API mein `/api/v1/products` old schema deta hai, jabki `/api/v2/products` updated schema deta hai. Interviews mein strategies pucha jata hai.  
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
   _Explanation_: Ye version 1 ke users endpoint ko define karta hai.

4. **How do you secure a Web API against common attacks? [imp, difficult]**  
   **Answer**: HTTPS encryption, input validation, rate limiting, JWT with short expiry, aur secure headers (Content-Security-Policy) use karte hain. Ye data breaches aur unauthorized access rokne ke liye critical hain. **Example**: Ek banking API mein parameterized queries SQL injection rokti hain, rate limiting 100 requests/hour set karta hai. Interviews mein best practices pucha jata hai.  
   ```csharp
   public IActionResult Login(string username, string password) {
       if (ValidateCredentials(username, password)) {
           var token = GenerateJwtToken(username);
           return Ok(new { Token = token });
       }
       return Unauthorized();
   }
   ```
   _Explanation_: Ye JWT token generate karta hai secure login ke liye.

5. **How do you improve Web API performance? [imp, difficult]**  
   **Answer**: Response caching, async/await, pagination, Gzip compression, aur optimized database queries use karte hain. Ye high-traffic APIs ke liye zaroori hai kyunki low latency user experience improve karta hai. **Example**: Ek e-commerce API mein pagination (`?page=1&size=20`) response time kam karta hai. Interviews mein optimization techniques pucha jata hai.  
   ```csharp
   [HttpGet]
   [ResponseCache(Duration = 60)]
   public async Task<IActionResult> GetUsers(int page = 1, int size = 10) {
       var users = await _db.Users.Skip((page - 1) * size).Take(size).ToListAsync();
       return Ok(users);
   }
   ```
   _Explanation_: Ye async aur caching ke saath paginated users return karta hai.

6. **What is HATEOAS in REST? [imp, difficult]**  
   **Answer**: HATEOAS (Hypermedia as the Engine of Application State) REST responses mein hyperlinks deta hai jo clients ko navigation guide karte hain. Ye client ko API ke structure ka prior knowledge nahi chahiye. **Example**: Ek e-commerce API `{ "id": 1, "name": "Laptop", "links": [{ "rel": "self", "href": "/api/products/1" }] }` deta hai. Interviews mein implementation pucha jata hai.  
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
   _Explanation_: Ye resource ke saath navigation links deta hai.

7. **How do you implement rate limiting in Web API? [imp, difficult]**  
   **Answer**: Rate limiting ke liye `AspNetCoreRateLimit` middleware use karte hain, jo user ya IP ke requests limit karta hai, Redis ya in-memory store mein counts track karke. Ye API abuse aur DDoS attacks prevent karta hai. **Example**: Ek social media API mein user ko 100 requests/hour allow kiya jata hai, excess par 429 return hota hai. Interviews mein setup pucha jata hai.  
   ```csharp
   services.AddRateLimiting(options => {
       options.AddFixedWindowLimiter("ApiLimit", opt => {
           opt.PermitLimit = 100;
           opt.Window = TimeSpan.FromHours(1);
       });
   });
   ```
   _Explanation_: Ye 1 ghante mein 100 requests limit karta hai.

8. **How do you unit test a Web API? [difficult]**  
   **Answer**: xUnit/NUnit use karke controllers test karte hain, Moq library se dependencies mock karke. Test cases response status aur data verify karte hain, ensuring code reliability.  
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
   _Explanation_: Ye GET method ka unit test karta hai.

9. **How do you implement API throttling? [difficult]**  
   **Answer**: Throttling ke liye middleware ya third-party tools (e.g., `AspNetCoreRateLimit`) use karte hain, jo request rates ko control karta hai based on user, IP, ya endpoint. Ye API overuse prevent karta hai.  
   ```csharp
   [HttpGet]
   [RateLimit(PermitLimit = 50, Window = "1h")]
   public IHttpActionResult GetData() {
       return Ok(_repository.GetData());
   }
   ```
   _Explanation_: Ye endpoint ke liye 50 requests/hour limit set karta hai.

10. **What is the role of async/await in Web API? [imp, difficult]**  
    **Answer**: Async/await non-blocking operations enable karta hai, jisse threads free rehte hain jab I/O operations (e.g., DB calls) complete hote hain. Ye scalability improve karta hai kyunki high-traffic APIs concurrent requests handle kar sakte hain. **Example**: Ek e-commerce API mein async DB query latency kam karta hai. Interviews mein benefits aur pitfalls pucha jata hai.  
    ```csharp
    [HttpGet]
    public async Task<IActionResult> GetUser(int id) {
        var user = await _db.Users.FindAsync(id);
        return user != null ? Ok(user) : NotFound();
    }
    ```
    _Explanation_: Ye async database call ke saath user fetch karta hai.

11. **How do you handle backward compatibility in Web API? [difficult]**  
    **Answer**: Versioning (e.g., `/api/v1`), default values for new fields, aur deprecation warnings use karke backward compatibility maintain karte hain. Ye ensures existing clients break nahi hote.  
    ```csharp
    [Route("api/v1/users/{id}")]
    public IHttpActionResult GetUser(int id) {
        var user = _repository.GetUser(id);
        return Ok(new { Id = user.Id, Name = user.Name }); // Old schema
    }
    ```
    _Explanation_: Ye version 1 schema maintain karta hai.

12. **What is the role of cache-control headers in REST APIs? [difficult]**  
    **Answer**: Cache-control headers (e.g., `max-age`, `no-cache`) responses ke caching behavior control karte hain, performance improve karte hain. Ye client aur server ke caching strategy define karte hain.  
    ```http
    HTTP/1.1 200 OK
    Cache-Control: max-age=60
    ```
    _Explanation_: Ye response ko 60 seconds ke liye cacheable banata hai.

13. **How do you implement token-based authentication in Web API? [difficult]**  
    **Answer**: JWT ya OAuth use karke token-based authentication implement karte hain, token ko Authorization header mein bhejte hain. Ye secure aur stateless authentication deta hai.  
    ```csharp
    [HttpGet]
    [Authorize]
    public IHttpActionResult GetSecureData() {
        return Ok(_repository.GetSecureData());
    }
    ```
    _Explanation_: Ye JWT token ke saath secure endpoint protect karta hai.

14. **What is the difference between OAuth and OpenID Connect? [difficult]**  
    **Answer**: OAuth authorization ke liye hai, resource access deta hai (e.g., API access). OpenID Connect authentication ke liye hai, user identity provide karta hai, OAuth ke upar built.  
    ```http
    GET /userinfo HTTP/1.1
    Authorization: Bearer <access_token>
    ```
    _Explanation_: Ye OpenID Connect ke userinfo endpoint se identity fetch karta hai.

15. **How do you optimize database queries in Web API? [difficult]**  
    **Answer**: Indexes, query optimization, eager/lazy loading, aur caching use karke database queries optimize karte hain. Ye API response time aur server load kam karta hai.  
    ```csharp
    public async Task<IHttpActionResult> GetProducts() {
        var products = await _db.Products
            .Where(p => p.IsActive)
            .Take(10)
            .ToListAsync();
        return Ok(products);
    }
    ```
    _Explanation_: Ye optimized query active products fetch karta hai.

16. **What is the role of the [FromQuery] attribute?**  
    **Answer**: [FromQuery] attribute query string parameters ko method parameters mein bind karta hai, jaise `?page=1`. Ye filtering aur pagination ke liye use hota hai.

17. **How do you implement request validation in Web API? [difficult]**  
    **Answer**: FluentValidation ya custom validation middleware use karke request data validate karte hain before processing. Ye invalid input se API ko protect karta hai.  
    ```csharp
    public class UserValidator : AbstractValidator<User> {
        public UserValidator() {
            RuleFor(u => u.Email).NotEmpty().EmailAddress();
        }
    }
    ```
    _Explanation_: Ye user input ke email ko validate karta hai.

18. **What is the purpose of the [NonAction] attribute?**  
    **Answer**: [NonAction] attribute method ko public API endpoint banne se rokta hai, internal use ke liye. Ye controller ke helper methods ko protect karta hai.

19. **How do you handle distributed transactions in Web API? [difficult]**  
    **Answer**: Saga pattern ya two-phase commit use karke distributed transactions manage karte hain across microservices. Ye consistency ensure karta hai complex systems mein.  
    ```csharp
    [HttpPost]
    public async Task<IHttpActionResult> PlaceOrder(Order order) {
        await _orderService.CreateOrderAsync(order);
        await _inventoryService.UpdateStockAsync(order.Items);
        return Ok();
    }
    ```
    _Explanation_: Ye saga pattern ke saath order aur inventory update karta hai.

20. **What is the role of the Problem Details specification in Web API? [difficult]**  
    **Answer**: Problem Details (RFC 7807) standard JSON error responses provide karta hai, jaise `{ "type": "error", "title": "Bad Request" }`. Ye error handling ko consistent aur client-friendly banata hai.  
    ```json
    {
        "type": "https://example.com/errors/bad-request",
        "title": "Bad Request",
        "status": 400,
        "detail": "Invalid input"
    }
    ```
    _Explanation_: Ye standard error response format deta hai.

21. **How do you implement health checks in Web API? [difficult]**  
    **Answer**: Health check endpoints (`/health`) ya ASP.NET Core HealthChecks middleware use karke API status monitor karte hain. Ye system reliability ensure karta hai.  
    ```csharp
    app.UseHealthChecks("/health");
    ```
    _Explanation_: Ye health check endpoint configure karta hai.

22. **What is the difference between a circuit breaker and retry pattern in Web API? [difficult]**  
    **Answer**: Circuit breaker repeated failures ke baad requests rok deta hai, system recovery ke liye. Retry pattern failed requests ko retry karta hai, temporary issues ke liye.  
    ```csharp
    public async Task<IHttpActionResult> CallExternalApi() {
        return await _circuitBreaker.ExecuteAsync(() => _httpClient.GetAsync("external-api"));
    }
    ```
    _Explanation_: Ye circuit breaker ke saath external API call karta hai.

23. **How do you implement background tasks in Web API? [difficult]**  
    **Answer**: Hosted services ya IHostedService use karke background tasks (e.g., scheduled jobs) implement karte hain. Ye long-running tasks ke liye suitable hai.  
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
    _Explanation_: Ye hourly scheduled task implement karta hai.

24. **What is the role of the [Consumes] attribute?**  
    **Answer**: [Consumes] attribute request ke content type specify karta hai, jaise `[Consumes("application/json")]` JSON input expect karta hai. Ye request validation ko clear karta hai.

25. **How do you handle API rate limiting for specific endpoints? [difficult]**  
    **Answer**: Endpoint-specific rate limiting ke liye middleware configure karte hain, jaise `[RateLimit(PermitLimit = 50, Window = "1h")]`. Ye specific endpoints ke overuse ko prevent karta hai.  
    ```csharp
    [HttpGet]
    [RateLimit(PermitLimit = 50, Window = "1h")]
    public IHttpActionResult GetData() {
        return Ok(_repository.GetData());
    }
    ```
    _Explanation_: Ye endpoint ke liye 50 requests/hour limit set karta hai.

