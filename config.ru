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
     post '/:count', to: 'calculator#update'
  end
end

class ApplicationController < ActionController::Base;end

class CalculatorController < ApplicationController
  append_view_path Rails.root.join 'calculator'

  def update
    @json = { count: params[:count].next }
    File.write(
      Rails.root.join('public/state.json'),
      @json.to_json
    )
    render json: @json, status: :ok
  end

  def index
    @json = JSON.parse(
      File.read(
        Rails.root.join('public/state.json')
      )
    )
    render template: 'index', layout: false
  end
end

CalculatorApp.initialize!
run CalculatorApp
