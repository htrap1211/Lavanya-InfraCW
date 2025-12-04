// Security middleware for Express/Connect
import helmet from 'helmet';

const securityMiddleware = [
  // Set security HTTP headers
  helmet(),
  
  // Prevent XSS attacks
  (req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    next();
  },
  
  // Rate limiting (example - customize as needed)
  (req, res, next) => {
    // Implement rate limiting logic here
    // For production, consider using express-rate-limit
    next();
  },
  
  // Request validation
  (req, res, next) => {
    // Add request validation logic here
    next();
  }
];

export default securityMiddleware;
