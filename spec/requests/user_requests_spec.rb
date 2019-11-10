require 'rails_helper'

RSpec.describe "User Requests", type: :request do
  describe "signing up a new user" do
    context "with valid params" do
      it "creates a user" do
        post "/api/users", params: {
          user: { username: 'username', password: 'password', email: 'email' }
        }
        expect(response).to render_template(:show)
        expect(response).to have_http_status(:created)
      end
    end

    context "with invalid params" do
      it "returns unprocessable entity with errors" do
        post "/api/users", params: {
          user: { username: 'username', password: 'pwd', email: 'email' }
        }
        expect(response).to have_http_status(422)
        expect(response.body).to include("Password is too short")
      end
    end
  end
  
  describe "getting list of users" do
    it "returns list of users" do
      post "/api/users", params: {
        user: { username: 'username', password: 'password', email: 'email' }
      }
      get "/api/users"
      expect(response).to render_template(:index)
    end
  end
end