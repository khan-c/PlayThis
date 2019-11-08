require 'rails_helper'

RSpec.describe Api::SessionsController, type: :controller do
  user = {
    username: 'username',
    password: 'password',
  }

  describe 'POST #create' do
    invalid_user = {
      username: 'invalid',
      password: 'invalid'
    }

    invalid_login_creds_error = "Invalid login credentials."

    context "with valid login credentials" do
      before(:example) do
        FactoryBot.create(:user)
      end

      it "logs user in" do
        post :create, params: { user: user }
        expect(response).to have_http_status 200
      end
    end

    context "with invalid login credentials" do
      before(:example) do
        FactoryBot.create(:user)
      end

      it "it returns 401 with 'invalid login credentials' error" do
        post :create, params: { user: invalid_user }
        expect(response).to have_http_status 401
        expect(response.body).to include invalid_login_creds_error
      end
    end
  end
end
