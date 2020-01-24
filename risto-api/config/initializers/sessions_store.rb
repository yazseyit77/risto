if Rails.env === 'production' 
    Rails.application.config.session_store :cookie_store, key: '_risto-api'
  else
    Rails.application.config.session_store :cookie_store, key: '_risto-api' 
  end