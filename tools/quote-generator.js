{
    "openapi": "3.1.0",
    "info": {
      "title": "Relevance AI Tools",
      "version": "latest"
    },
    "servers": [
      {
        "url": "https://agents.relevance.ai/f1db6c/latest"
      }
    ],
    "paths": {
      "/studios/aa738108-7ca3-49d1-ad9d-cdf4bfe9d7c0/trigger_llm_friendly": {
        "post": {
          "operationId": "Sparkly_cost_estimate",
          "summary": "Sparkly Cost Estimate",
          "description": "This tool provides the estimated cost of cleaning the apartment or the house.",
          "security": [
            {
              "AuthorizationHeader": []
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/aa738108-7ca3-49d1-ad9d-cdf4bfe9d7c0RequestBodySchema"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "successful operation",
              "content": {
                "application/json": {}
              }
            }
          }
        }
      }
    },
    "components": {
      "schemas": {
        "aa738108-7ca3-49d1-ad9d-cdf4bfe9d7c0RequestBodySchema": {
          "properties": {
            "property_type": {
              "type": "string",
              "enum": [
                "Apartment",
                "House"
              ],
              "value": "Yes",
              "order": 0,
              "title": "Property Type",
              "description": "The type of property",
              "metadata": {}
            },
            "square_footage": {
              "type": "number",
              "min": 0,
              "value": 0,
              "order": 1,
              "title": "Square Footage",
              "metadata": {},
              "description": "The square footage of the property"
            }
          },
          "required": [
            "property_type",
            "square_footage"
          ],
          "type": "object"
        }
      }
    }
  }