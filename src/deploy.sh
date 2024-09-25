#!/bin/bash
echo "Deploying the application..."
# Simulate a deployment (e.g., copying files, starting services, etc.)
# Uncomment the line below if you have a deployment command
# npm run deploy 
echo "Deployment failed. Triggering rollback..."
exit 1  # Fail deployment to trigger rollback
