<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class LandingPage extends Model
{
    protected $fillable = [
        'about_me',
        'skills',

    ];

    public function techStacks(): BelongsToMany
    {
        return $this->belongsToMany(TechStack::class);
    }
}
