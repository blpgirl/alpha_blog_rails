class User < ApplicationRecord
  before_save { self.email = email.downcase }
  has_many :articles
  # The case sensitive false is so that it doesn't recognize as different uppercase vs normal
  validates :username, presence: true,
                        uniqueness: { case_sensitive: false },
                        length: {minimum: 3, maximum: 25}
  # To test the expression go to https://rubular.com/
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true, uniqueness: { case_sensitive: false },
                    length: {maximum: 125}, format: { with: VALID_EMAIL_REGEX }

  has_secure_password
end
