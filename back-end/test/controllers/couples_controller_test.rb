require "test_helper"

class CouplesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @couple = couples(:one)
  end

  test "should get index" do
    get couples_url, as: :json
    assert_response :success
  end

  test "should create couple" do
    assert_difference("Couple.count") do
      post couples_url, params: { couple: { name: @couple.name } }, as: :json
    end

    assert_response :created
  end

  test "should show couple" do
    get couple_url(@couple), as: :json
    assert_response :success
  end

  test "should update couple" do
    patch couple_url(@couple), params: { couple: { name: @couple.name } }, as: :json
    assert_response :success
  end

  test "should destroy couple" do
    assert_difference("Couple.count", -1) do
      delete couple_url(@couple), as: :json
    end

    assert_response :no_content
  end
end
