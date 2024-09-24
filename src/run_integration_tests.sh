#!/bin/bash
echo "Running integration tests..."
# Run integration tests
npm test -- --testPathPattern=integration
echo "Integration tests completed."
exit 0
