export default function schema() {
  return (
      {
          "definitions": {},
          "$schema": "http://json-schema.org/draft-06/schema#",
          "$id": "http://example.com/example.json",
          "type": "object",
          "properties": {
              "body": {
                  "$id": "/properties/body",
                  "type": "string",
                  "title": "The Body Schema.",
                  "description": "An explanation about the purpose of this instance.",
                  "default": "",
                  "examples": [
                      "Hi there! I am a COMMENT."
                  ]
              },
              "author": {
                  "$id": "/properties/author",
                  "type": "string",
                  "title": "The Author Schema.",
                  "description": "An explanation about the purpose of this instance.",
                  "default": "",
                  "examples": [
                      "thingtwo"
                  ]
              }
          },
          "required": [
              "body",
              "author"
          ]
      }
)}
