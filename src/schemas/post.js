export default function schema() {
  return (
{
  "definitions": {},
  "$schema": "http://json-schema.org/draft-06/schema#",
  "$id": "http://example.com/example.json",
  "type": "object",
  "properties": {
    "title": {
      "$id": "/properties/title",
      "type": "string",
      "title": "Title",
      "description": "An explanation about the purpose of this instance.",
      "default": "",
      "examples": [
        "Learn Redux in 10 minutes!"
      ]
    },
    "author": {
      "$id": "/properties/author",
      "type": "string",
      "title": "Author",
      "description": "An explanation about the purpose of this instance.",
      "default": "",
      "examples": [
        "thingone"
      ]
    },
    "category": {
      "$id": "/properties/category",
      "type": "string",
      "title": "Category",
      "description": "An explanation about the purpose of this instance.",
      "default": "",
      "examples": [
        "redux"
      ]
    },
    "body": {
      "$id": "/properties/body",
      "type": "string",
      "title": "Body",
      "description": "An explanation about the purpose of this instance.",
      "default": "",
      "examples": [
        " Moving on, I at last came to a dim sort of light not far from the docks, and heard a forlorn creaking in the air; and looking up, saw a swinging sign over the door with a white painting upon it, faintly representing a tall straight jet of misty spray, and these words underneath—“The Spouter Inn:—Peter Coffin.\r\n”\r\n\r\nCoffin?—Spouter?—Rather ominous in that particular connexion, thought I.\r\n But it is a common name in Nantucket, they say, and I suppose this Peter here is an emigrant from there.\r\n ..."
      ]
    }
  },
  "required": [
    "title",
    "author",
    "category",
    "body"
  ]
}

)}
