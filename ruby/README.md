# UUID Generator API - Ruby Gem

UUID Generator is a UUID generator API that produces random RFC 4122 version 4 UUIDs on demand. Request single IDs or batches in standard lowercase, uppercase, or strings without hyphens.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_uuidgenerator'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_uuidgenerator
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_uuidgenerator'

# Initialize the client
client = APIVerve::Uuidgenerator::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({
  count: 1,
  version: 4,
  format: "default"
})

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ count: 1, version: 4, format: "default" })
  puts response["data"]
rescue APIVerve::Uuidgenerator::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Uuidgenerator::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Uuidgenerator::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
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

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/uuidgenerator?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/uuidgenerator?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/uuidgenerator?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
