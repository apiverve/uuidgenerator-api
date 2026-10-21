# UUID Generator API - PHP Package

UUID Generator is a UUID generator API that produces random RFC 4122 version 4 UUIDs on demand. Request single IDs or batches in standard lowercase, uppercase, or strings without hyphens.

## Installation

Install via Composer:

```bash
composer require apiverve/uuidgenerator
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Uuidgenerator\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute([
    'count' => 1,
    'version' => 4,
    'format' => 'default'
]);

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Uuidgenerator\Client;
use APIVerve\Uuidgenerator\Exceptions\APIException;
use APIVerve\Uuidgenerator\Exceptions\ValidationException;

try {
    $response = $client->execute(['count' => 1, 'version' => 4, 'format' => 'default']);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
```

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "uuids": [
      "fd874c4e-4fc2-4a65-ab1e-46c7a141c3c3",
      "59f31559-dd12-46ff-a3d1-d7bd5eddb09b",
      "f09b5f16-1b68-4082-acbc-38ce08de2fe4",
      "c8c1b3d8-e927-43a7-840c-ced3964ca95f",
      "aa3cb61e-096f-46fa-a12c-5f2b696186fb"
    ],
    "count": 5,
    "version": 4,
    "format": "default",
    "variant": "RFC 4122"
  }
}
```

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/uuidgenerator?utm_source=packagist&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/uuidgenerator?utm_source=php&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/uuidgenerator?utm_source=php&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).
