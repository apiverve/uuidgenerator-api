Pod::Spec.new do |s|
  s.name             = 'APIVerveUUIDGenerator'
  s.version          = '1.2.3'
  s.summary          = 'UUID Generator is a UUID generator API that produces random RFC 4122 version 4 UUIDs on demand.'
  s.description      = <<-'DESC'
UUID Generator is a UUID generator API that produces random RFC 4122 version 4 UUIDs on demand. Request single IDs or batches in standard lowercase, uppercase, or strings without hyphens.

This iOS/macOS SDK provides a convenient way to access the UUID Generator from APIVerve.
Supports both callback-based and async/await patterns.
                       DESC

  s.homepage         = 'https://apiverve.com/marketplace/uuidgenerator?utm_source=cocoapods&utm_medium=referral&utm_content=homepage'
  s.license          = { :type => 'MIT', :file => 'LICENSE' }
  s.author           = { 'APIVerve' => 'hello@apiverve.com' }
  # The SDK repo holds every language; the pod lives under cocoapods/ with its own tag.
  s.source           = { :git => 'https://github.com/apiverve/uuidgenerator-api.git', :tag => "cocoapods/v#{s.version}" }

  s.ios.deployment_target = '15.0'
  s.osx.deployment_target = '12.0'

  s.swift_version = '5.0'

  s.source_files = 'cocoapods/Sources/APIVerveUUIDGenerator/**/*.swift'

  s.frameworks = 'Foundation'

  # APIResponse, APIVerveError and the request plumbing, shared by every APIVerve pod.
  s.dependency 'APIVerveCore', '~> 1.2'
end
