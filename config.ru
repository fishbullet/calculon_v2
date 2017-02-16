require "rubygems"

require 'bundler/setup'

require 'rails'
require 'active_support/railtie'
require 'action_dispatch/railtie'
require 'action_controller/railtie'

class CalculatorApp < Rails::Application
  config.eager_load = true
  config.cache_classes = true
  config.consider_all_requests_local = true

  config.secret_key_base = 'thisismay21321awesomecalculator23131macdeforlulzonly312321'

  routes.append do
     get '/', to: 'calculator#index'
  end
end

class ApplicationController < ActionController::Base;end

class CalculatorController < ApplicationController
  append_view_path Rails.root.join 'calculator'

  def index
    render template: 'index', layout: false
  end
end

CalculatorApp.initialize!
run CalculatorApp
