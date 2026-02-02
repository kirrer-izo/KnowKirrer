<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreChallengeRequest;
use App\Http\Requests\UpdateChallengeRequest;
use App\Http\Resources\ChallengeResource;
use App\Models\Challenge;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class ChallengeController extends Controller
{
    public function __construct() {
        $this->middleware('auth:sanctum')->except(['index','show']);
    }   
    /**
     * Display a listing of the resource.
     */
    public function index(Project $project)
    {
        return ChallengeResource::collection(Challenge::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreChallengeRequest $request, Project $project)
    {
        $data = $request->validated();

        $challenge = Challenge::create($data);

        return response()->json($challenge, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Project $project, string $id)
    {
        return new ChallengeResource(Challenge::findorFail($id));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateChallengeRequest $request, Project $project, string $id)
    {
        $challenge = Challenge::findorFail($id);

        $data = $request->validated();

        $challenge->update($data);

        return response()->json($challenge, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project, string $id)
    {
        Challenge::findorFail($id)->delete();
        return response(null,204);
    }
}
