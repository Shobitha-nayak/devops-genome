#!/bin/bash
echo "Running unit tests..."
# Run unit tests
npm test -- --testPathPattern=unit
echo "Unit tests completed."
exit 0
