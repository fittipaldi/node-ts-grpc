# Node TypeScript gRPC Service

This is a **gRPC** service built with **Node.js & TypeScript**, providing an example implementation of a gRPC API with
structured repository and service layers.

## 📖 Features

- **gRPC API** with well-defined request/response types
- **TypeScript** for better code maintainability
- **Repository & Service Layer** for clean architecture
- **Jest** tests for unit testing

---

## 🛠 Installation & Setup

### 1️⃣ **Clone the Repository**

```bash
git clone https://github.com/fittipaldi/node-ts-grpc.git
cd node-ts-grpc
```

### 2️⃣ **Install Dependencies**

```bash
make install
```

### 3️⃣ **Start the gRPC Server**

```bash
make start
```

## 🏗 **Project Structure**

```bash
node-ts-grpc/
│── src/
│   ├── proto/              # .proto files (gRPC definitions)
│   ├── services/           # gRPC service logic
│   │   ├── demoService.ts  # Example service implementation
│   ├── repository/         # Data repository (singleton)
│   │   ├── demoRepository.ts
│   ├── index.ts            # Main server entry point
│── test/                   # Unit tests
│── package.json
│── README.md
```

## 🛰 **gRPC API Definition**

### 📌 **CreateDemo (Unary Call)**

#### Request:

```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

#### Response:

```json
{
  "uuid": "123e4567-e89b-12d3-a456-426614174000",
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Demo created successfully!"
}
```

### 📌 **GetDemos (Unary Call)**

#### Response:

```json
{
  "demos": [
    {
      "uuid": "123e4567-e89b-12d3-a456-426614174000",
      "name": "Alice",
      "email": "alice@example.com",
      "message": "Demo created successfully!"
    }
  ]
}

```