
# **Public Representative API**

A web application to display the details of public representatives using a map-based interface. Built with PostgreSQL (Supabase), Python (for database connection), and an API endpoint powered by Express or Fastify.

---

## **Features**

- Fetch and display details of public representatives.
- Interactive map-based UI for selecting locations.
- Fast API endpoint to handle user requests.
- Supabase integration for database management.

---

## **Project Structure**

```plaintext
.
├── .env                  # Environment variables for secure credentials
├── connection.py         # Python script to connect to the database
├── api.js                # API endpoint (Express or Fastify)
├── public/               # Frontend files (HTML, CSS, JS)
├── database/             # Supabase setup and schema visualization
└── README.md             # Project documentation
```

---

## **Setup Instructions**

### **1. Clone the Repository**
```bash
git clone https://github.com/your-username/your-repository-name.git
cd your-repository-name
```

### **2. Install Dependencies**
#### Backend:
```bash
pip install python-dotenv psycopg2
```

#### API (Node.js):
```bash
npm install express dotenv
# Or, if using Fastify
npm install fastify dotenv
```

### **3. Set Up Environment Variables**
Create a `.env` file in the project root and add the following:

```env
DATABASE_URL=postgresql://postgres:[YOUR-PASSWORD]@db.lwcrykpalphdzocdihnv.supabase.co:5432/postgres
user=postgres
password=[YOUR-PASSWORD]
host=db.lwcrykpalphdzocdihnv.supabase.co
port=5432
dbname=postgres
```

---

## **Usage**

### **Run the Python Backend**
To test the database connection:
```bash
python connection.py
```

### **Start the API Endpoint**
Using Express:
```bash
node api.js
```

Using Fastify:
```bash
node fastify.js
```

---

## **Technologies Used**

- **Database**: PostgreSQL (Supabase)
- **Backend**: Python (psycopg2, dotenv), Node.js (Express or Fastify)
- **Frontend**: HTML, CSS, JavaScript
- **Map Integration**: Leaflet.js / Google Maps API (optional)

