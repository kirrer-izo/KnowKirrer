<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class TechStack extends Model
{
    protected $fillable = [
        'name'
    ];

    public function landingPages(): BelongsToMany
    {
        return $this->belongsToMany(LandingPage::class);
    }
}
