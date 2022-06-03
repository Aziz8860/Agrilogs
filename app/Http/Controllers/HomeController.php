<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home');
    }

    public function updateUser( Request $data )
    {
        $user = User::find($data["_id"]);
        $user->name = $data['firstname'] ." ". $data['lastname'];
        $user->firstname = $data['firstname'];
        $user->lastname = $data['lastname'];
        $user->email = $data['email'];
        $user->phone = $data['phone'];
        $user->save();
        return redirect()->back()->with('updateUser','.');
    }
}
