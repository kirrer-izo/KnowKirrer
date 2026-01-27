<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function send(Request $request) 
    {
        $data = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'message' => 'required|string'
        ]);

        $request = Http::post('http://localhost:3000/send-email', $data);

        if($response->successful()) {
            return response()->json(['message' => 'Email sent']);
        }

        return $response()->json(['message' => 'Failed'], 500);
    }
}
