source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "3.0.5"

gem "rails", "~> 7.0.4", ">= 7.0.4.3"

gem "acts_as_list", "~> 1.1"
gem "bcrypt", "~> 3.1.7"
gem "cssbundling-rails"
gem "foreman", "~> 0.87.2"
gem "jbuilder"
gem "jsbundling-rails"
gem "pg", "~> 1.1"
gem "puma", "~> 5.0"
gem "redis", "~> 4.0"
gem "redcarpet", "~> 3.6"
gem "rouge", "~> 4.1"
gem "sprockets-rails"
gem "stimulus-rails"
gem "turbo-rails"

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: %i[ mingw mswin x64_mingw jruby ]

# Reduces boot times through caching; required in config/boot.rb
gem "bootsnap", require: false
gem 'annotate'

gem "sassc-rails"

gem "image_processing", "~> 1.2"

group :development, :test do
  # See https://guides.rubyonrails.org/debugging_rails_applications.html#debugging-with-the-debug-gem

  gem "debug", platforms: %i[ mri mingw x64_mingw ]
  gem "pry", "~> 0.14.2"
end

group :development do
  # Use console on exceptions pages [https://github.com/rails/web-console]
  gem "web-console"
end
