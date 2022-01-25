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

  # To validate that is a rgb valid color ... added /\A at the beginning expression
  # and added \z/i at the end of the expression to make it valid for rails
  VALID_HEX_COLOR = /\A^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$\z/i
  validates :color, length: {minimum: 4, maximum: 7}, format: { with: VALID_HEX_COLOR }

  has_secure_password
end
