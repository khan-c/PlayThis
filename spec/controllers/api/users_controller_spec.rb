require 'rails_helper'

RSpec.describe Api::UsersController, type: :controller do
  describe 'POST #create' do
    context 'with valid params' do
      it 'validates the presence of username, password, and email' do
        post :create, params: { use_route: 'api/users', user: { username: 'username', password: 'password', email: 'email' } }
        expect(response).to have_http_status 422
        expect(response.body).to be_present
      end
    end

    context 'with invalid params' do
      
    end
  end
end
