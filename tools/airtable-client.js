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
    "/studios/c2570c5e-ca5c-4680-886f-bae3d02991a9/trigger_llm_friendly": {
      "post": {
        "operationId": "Airtable_lead_capture_-_name__email___phone",
        "summary": "Airtable Lead Capture - Name, Email & Phone",
        "description": "This tool captures lead information and stores it in an Airtable CRM. It requires the lead's name, phone and email.",
        "security": [
          {
            "AuthorizationHeader": []
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/c2570c5e-ca5c-4680-886f-bae3d02991a9RequestBodySchema"
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
      "c2570c5e-ca5c-4680-886f-bae3d02991a9RequestBodySchema": {
        "properties": {
          "name": {
            "type": "string",
            "frontend_metadata": {
              "required": true
            },
            "order": 0,
            "title": "Name",
            "description": "Name of the lead",
            "metadata": {}
          },
          "email": {
            "type": "string",
            "frontend_metadata": {
              "required": true
            },
            "order": 1,
            "title": "Email",
            "description": "Email address of the lead",
            "metadata": {}
          },
          "phone": {
            "type": "string",
            "frontend_metadata": {
              "required": true
            },
            "order": 2,
            "title": "Phone",
            "description": "Phone number of the lead"
          }
        },
        "required": [
          "name",
          "email",
          "phone"
        ],
        "type": "object"
      }
    }
  }
}