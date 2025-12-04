# Lavanya Infrastructure - API Specification

## 📡 Backend API Requirements

This document outlines the API endpoints required to integrate the frontend with backend services.

---

## 🔐 Authentication & Security

### Base URL
```
Production: https://api.lavanyainfra.com
Development: http://localhost:3000/api
```

### Headers
```http
Content-Type: application/json
Accept: application/json
```

### Error Response Format
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid email format",
    "details": {
      "field": "email",
      "value": "invalid-email"
    }
  },
  "timestamp": "2024-01-15T10:30:00Z"
}
```

---

## 📧 Contact Form API

### POST /api/contact
Submit contact form data.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "subject": "Project Inquiry",
  "message": "I'm interested in your construction services..."
}
```

**Validation Rules:**
- `name`: Required, string, 2-100 characters
- `email`: Required, valid email format
- `phone`: Optional, string, valid phone format
- `subject`: Required, string, 5-200 characters
- `message`: Required, string, 10-2000 characters

**Success Response (201):**
```json
{
  "success": true,
  "message": "Thank you for your message. We'll get back to you within 24 hours.",
  "data": {
    "id": "contact_123456",
    "submitted_at": "2024-01-15T10:30:00Z"
  }
}
```

**Error Responses:**
- `400`: Validation error
- `429`: Rate limit exceeded
- `500`: Server error

**Rate Limiting:**
- 5 submissions per IP per hour
- 1 submission per email per hour

---

## 🏗️ Projects API

### GET /api/projects
Retrieve all projects for portfolio display.

**Query Parameters:**
- `limit`: Number of projects to return (default: 10, max: 50)
- `category`: Filter by category (optional)
- `featured`: Return only featured projects (boolean)

**Success Response (200):**
```json
{
  "success": true,
  "data": [
    {
      "id": "proj_001",
      "title": "Modern Office Complex",
      "description": "A state-of-the-art office building with sustainable design",
      "category": "Commercial",
      "status": "Completed",
      "year": 2023,
      "location": "Downtown Business District",
      "size": "50,000 sq ft",
      "duration": "18 months",
      "images": [
        {
          "url": "/images/projects/office-complex-1.jpg",
          "alt": "Office complex exterior view",
          "is_primary": true
        },
        {
          "url": "/images/projects/office-complex-2.jpg",
          "alt": "Office complex interior",
          "is_primary": false
        }
      ],
      "technologies": ["Steel Frame", "Green Roof", "Solar Panels"],
      "client": "TechCorp Industries",
      "featured": true,
      "created_at": "2024-01-15T10:30:00Z"
    }
  ],
  "pagination": {
    "total": 25,
    "page": 1,
    "limit": 10,
    "has_more": true
  }
}
```

### GET /api/projects/{id}
Retrieve specific project details.

**Success Response (200):**
```json
{
  "success": true,
  "data": {
    "id": "proj_001",
    "title": "Modern Office Complex",
    "description": "Detailed project description...",
    "full_description": "Extended project details with technical specifications...",
    "category": "Commercial",
    "status": "Completed",
    "year": 2023,
    "location": "Downtown Business District",
    "size": "50,000 sq ft",
    "duration": "18 months",
    "budget": "Confidential",
    "images": [
      {
        "url": "/images/projects/office-complex-1.jpg",
        "alt": "Office complex exterior view",
        "is_primary": true,
        "order": 1
      }
    ],
    "technologies": ["Steel Frame", "Green Roof", "Solar Panels"],
    "client": {
      "name": "TechCorp Industries",
      "logo": "/images/clients/techcorp-logo.png"
    },
    "features": [
      "LEED Gold Certification",
      "Energy Efficient HVAC",
      "Smart Building Systems"
    ],
    "testimonial": {
      "text": "Lavanya delivered an exceptional project that exceeded our expectations.",
      "author": "Jane Smith",
      "position": "CEO, TechCorp Industries"
    },
    "featured": true,
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  }
}
```

---

## 🛠️ Services API

### GET /api/services
Retrieve all services offered.

**Success Response (200):**
```json
{
  "success": true,
  "data": [
    {
      "id": "svc_001",
      "title": "Commercial Construction",
      "description": "Full-service commercial construction from planning to completion",
      "icon": "building",
      "features": [
        "Project Management",
        "Quality Assurance",
        "Timely Delivery"
      ],
      "categories": ["Construction", "Commercial"],
      "order": 1,
      "active": true
    },
    {
      "id": "svc_002", 
      "title": "Infrastructure Development",
      "description": "Roads, bridges, and public infrastructure projects",
      "icon": "road",
      "features": [
        "Design & Planning",
        "Construction Management",
        "Maintenance Services"
      ],
      "categories": ["Infrastructure", "Public Works"],
      "order": 2,
      "active": true
    }
  ]
}
```

---

## 📊 Company Statistics API

### GET /api/stats
Retrieve company statistics for hero section.

**Success Response (200):**
```json
{
  "success": true,
  "data": {
    "projects_completed": 250,
    "years_experience": 15,
    "client_satisfaction": 98,
    "team_members": 45,
    "countries_served": 8,
    "total_sqft_built": 2500000,
    "last_updated": "2024-01-15T10:30:00Z"
  }
}
```

---

## 👥 Team API

### GET /api/team
Retrieve team members information.

**Success Response (200):**
```json
{
  "success": true,
  "data": [
    {
      "id": "team_001",
      "name": "Rajesh Kumar",
      "position": "Managing Director",
      "bio": "Over 20 years of experience in construction...",
      "image": "/images/team/rajesh-kumar.jpg",
      "linkedin": "https://linkedin.com/in/rajesh-kumar",
      "email": "rajesh@lavanyainfra.com",
      "order": 1,
      "active": true
    }
  ]
}
```

---

## 📰 News/Blog API (Future Enhancement)

### GET /api/news
Retrieve company news and updates.

**Query Parameters:**
- `limit`: Number of articles (default: 5)
- `category`: Filter by category
- `featured`: Return only featured articles

**Success Response (200):**
```json
{
  "success": true,
  "data": [
    {
      "id": "news_001",
      "title": "New Green Building Initiative",
      "excerpt": "Lavanya Infrastructure announces new sustainable building practices...",
      "content": "Full article content...",
      "author": "Marketing Team",
      "published_at": "2024-01-15T10:30:00Z",
      "featured_image": "/images/news/green-building.jpg",
      "category": "Sustainability",
      "tags": ["Green Building", "Sustainability", "Innovation"],
      "featured": true
    }
  ]
}
```

---

## 🔍 Search API (Future Enhancement)

### GET /api/search
Search across projects, services, and content.

**Query Parameters:**
- `q`: Search query (required)
- `type`: Content type (projects, services, news)
- `limit`: Results limit (default: 10)

**Success Response (200):**
```json
{
  "success": true,
  "data": {
    "query": "office building",
    "results": [
      {
        "type": "project",
        "id": "proj_001",
        "title": "Modern Office Complex",
        "description": "A state-of-the-art office building...",
        "relevance_score": 0.95
      }
    ],
    "total_results": 5,
    "search_time_ms": 45
  }
}
```

---

## 📧 Email Integration

### Email Templates Required

1. **Contact Form Confirmation**
   - Subject: "Thank you for contacting Lavanya Infrastructure"
   - Template: Confirmation email to customer

2. **Internal Notification**
   - Subject: "New Contact Form Submission"
   - Template: Internal notification to team

3. **Auto-Response**
   - Subject: "We've received your inquiry"
   - Template: Immediate acknowledgment

### Email Service Configuration
```json
{
  "provider": "sendgrid|ses|smtp",
  "from_email": "noreply@lavanyainfra.com",
  "from_name": "Lavanya Infrastructure",
  "reply_to": "info@lavanyainfra.com",
  "templates": {
    "contact_confirmation": "template_id_123",
    "internal_notification": "template_id_456"
  }
}
```

---

## 🗄️ Database Schema Suggestions

### Contacts Table
```sql
CREATE TABLE contacts (
  id UUID PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  subject VARCHAR(200) NOT NULL,
  message TEXT NOT NULL,
  ip_address INET,
  user_agent TEXT,
  status VARCHAR(20) DEFAULT 'new',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### Projects Table
```sql
CREATE TABLE projects (
  id UUID PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  description TEXT NOT NULL,
  full_description TEXT,
  category VARCHAR(50),
  status VARCHAR(30),
  year INTEGER,
  location VARCHAR(200),
  size VARCHAR(100),
  duration VARCHAR(50),
  budget VARCHAR(100),
  featured BOOLEAN DEFAULT FALSE,
  order_index INTEGER DEFAULT 0,
  active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### Project Images Table
```sql
CREATE TABLE project_images (
  id UUID PRIMARY KEY,
  project_id UUID REFERENCES projects(id),
  image_url VARCHAR(500) NOT NULL,
  alt_text VARCHAR(200),
  is_primary BOOLEAN DEFAULT FALSE,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

## 🚀 Implementation Priority

### Phase 1 (Critical - Week 1)
1. Contact form API with email integration
2. Basic error handling and validation
3. Rate limiting implementation

### Phase 2 (Important - Week 2)
1. Projects API with image management
2. Services API
3. Company statistics API

### Phase 3 (Enhancement - Week 3-4)
1. Team API
2. Content management system
3. Search functionality
4. Admin dashboard

---

## 🔧 Development Guidelines

### Code Standards
- Use RESTful API design principles
- Implement proper HTTP status codes
- Include comprehensive error handling
- Add request/response logging
- Implement input validation and sanitization

### Security Requirements
- Implement rate limiting
- Add CORS configuration
- Use HTTPS in production
- Validate all inputs
- Implement proper authentication for admin endpoints

### Performance Considerations
- Implement caching for static data
- Optimize database queries
- Use pagination for large datasets
- Compress API responses
- Implement CDN for static assets

---

**Document Version:** 1.0.0  
**Last Updated:** $(date)  
**Next Review:** After backend implementation begins
