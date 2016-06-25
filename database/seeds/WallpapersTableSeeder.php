<?php

use Illuminate\Database\Seeder;

class WallpapersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $contents = Flysystem::listContents();

        foreach ($contents as $file){
            \App\Wallpaper::create([
                'filename' => $file['path'],
                'source' => 'Windows Spotlight Wallpapers'
            ]);
        }
    }
}
