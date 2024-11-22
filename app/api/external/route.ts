import { NextResponse } from "next/server";

const EXTERNAL_API_URL = "https://jsonplaceholder.typicode.com/posts";

export async function GET() {
  try {
    // Fetch data from the external API
    const response = await fetch(EXTERNAL_API_URL);

    // Check if the response is not OK and return an error response
    if (!response.ok) {
      return NextResponse.json(
        { success: false, message: "Failed to fetch data from the API" },
        { status: response.status }
      );
    }

    // Parse the response JSON data
    const data = await response.json();

    // Return the fetched data as a JSON response
    return NextResponse.json(
      { success: true, data },
      { status: 200 }
    );
  } catch (error: unknown) {
    // Handle any errors that occur during the fetch
    if (error instanceof Error) {
      // Check if the error is an instance of the Error class
      return NextResponse.json(
        { success: false, message: "An error occurred while fetching data", error: error.message },
        { status: 500 }
      );
    } else {
      // Handle the case where the error is not an instance of Error
      return NextResponse.json(
        { success: false, message: "An unknown error occurred", error: "Unknown error" },
        { status: 500 }
      );
    }
  }
}
