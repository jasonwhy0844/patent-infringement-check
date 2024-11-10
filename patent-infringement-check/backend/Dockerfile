# Use Python 3.9 as base image for backend
FROM python:3.9-slim

WORKDIR /app

# Copy requirements and install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code
COPY . .

# Expose port 5000 for Flask app
EXPOSE 5000

# Command to run the application
CMD ["python", "app.py"]