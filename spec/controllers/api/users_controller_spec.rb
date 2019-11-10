# require 'rails_helper'

# RSpec.describe Api::UsersController, type: :controller do
#   describe 'POST #create' do
#     context 'with valid params' do
#       it 'validates the presence of username, password, and email' do
#         post :create, params: { use_route: 'api/users', user: { username: 'username', password: 'password', email: 'email' } }
#         expect(response).to have_http_status 200
#         # expect(response).to render_template("show")
#       end
#     end

#     context 'with invalid params' do
#       it 'returns a 422 with errors' do
#         errors = [
#           "Email can't be blank",
#           "Username can't be blank",
#           "Password is too short (minimum is 6 characters)"
#         ]

#         post :create, params: { use_route: 'api/users',
#           user: { username: 'username', password: 'password' }
#         }
#         expect(response).to have_http_status 422
#         expect(errors.any? { |e| response.body.include? e }).to be true
        
#         post :create, params: { use_route: 'api/users',
#           user: { email: 'email', password: 'password' }
#         }
#         expect(response).to have_http_status 422
#         expect(errors.any? { |e| response.body.include? e }).to be true

#         post :create, params: { use_route: 'api/users',
#           user: { username: '', password: '', email: '' }
#         }
#         expect(response).to have_http_status 422
#         expect(errors.any? { |e| response.body.include? e }).to be true
#       end
#     end
#   end

#   describe "GET #index" do    
#   end
# end
