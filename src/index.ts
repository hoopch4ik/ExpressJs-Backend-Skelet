// Import packages onto app
import express, { NextFunction, Response, Request } from "express";
// import session from "express-session";
import helmet from "helmet";
import hpp from "hpp";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import { ApiResponse } from "@hooks/hook.response";
import { asyncHandler } from "@mwares/mware.controllers";
import { apiv1 } from "@api";
import { configEnv } from "@config/config.env";

// import apiv1 from "api";
// import { ApiError } from "@utils/ApiError";
// import { asyncHandler } from "@middleware/async-middleware";
// import { socketInitialize } from "@services/socketService";
// import { Database } from "@database"



// Setup constant variables
const PORT = configEnv.PORT;
const RATE_TIME_LIMIT = Number(configEnv.RATE_TIME_LIMIT);
const RATE_REQUEST_LIMIT = Number(configEnv.RATE_REQUEST_LIMIT);
// const SECRET_SESSION_PHRASE = configEnv.SECRET_SESSION_PHRASE as string;


// Init express app
const app = express();


// Cors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', "*");
  res.header('Access-Control-Allow-Credentials', "true");
  // access allowed headers
  // res.header('Access-Control-Allow-Headers', "Origin, Cookies, X-Requested-With, Content-Type, Accept, accessToken, refreshToken, verifyToken");
  res.header('Access-Control-Allow-Headers', "*");
  next();
});


// Detailed server logging
app.use(morgan("dev"));


// Limit rate of requests
// Alternatively, you can pass through specific routes for different limits based on route
app.use(
  rateLimit({
    windowMs: RATE_TIME_LIMIT * 60 * 1000,
    max: RATE_REQUEST_LIMIT,
  }),
);

// Security Headers
app.use(helmet());

// Secure against param pollutions
app.use(hpp());

// Body parser
app.use(express.json());

// session auth user
// app.use(session({
//     secret: SECRET_SESSION_PHRASE, // Секретный ключ для подписи cookie
//     resave: false, // Предотвращает повторную запись сессии, если она не изменилась
//     saveUninitialized: false, // Предотвращает сохранение пустых сессий
//     cookie: {
//         httpOnly: true,
//         secure: false, // Только для HTTPS в production
//         sameSite: "strict", // Защита от CSRF
//         maxAge: 24 * 60 * 60 * 1000 // Срок жизни cookie (1 день)
//     },
//     // Если нужно хранить сессии в базе данных:
//     // store: new RedisStore({ client: redisClient })
// }));


// Error handling middleware
app.use((err: Error, req:Request, res:Response, next: NextFunction) => {
  if ('body' in err) {
      return res.status(400).send(new ApiResponse({
        success: false,
        message: "Body syntax error"
      })); // Bad request
  }
  console.log(err);
  next();
});


// Routes
app.use(configEnv.GENERAL_ROUTE, apiv1)

app.use('/', asyncHandler(async (req, res, next) => {
  res.status(404).json(new ApiResponse({
    success: false,
    message: "Invalid route"
  }))
} ));

// for https protocol

// const options = {
//   key: fs.readFileSync(path.join(__dirname, "/localhost-key.pem")),
//   cert: fs.readFileSync(path.join(__dirname, "/localhost.pem")),
// };
// const server = https.createServer(options, app);

// Listen to specified port in .env or default 5000
app.listen(PORT, () => {
  console.log(`Server is listening on: ${PORT}`);
});


