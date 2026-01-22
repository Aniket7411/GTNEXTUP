# Copy missing images from app/pages/assets to public/assets
$sourceDir = "app\pages\assets"
$destDir = "public\assets"

$images = @(
    "crm.png",
    "crmerp.jpg",
    "ims.jpg",
    "astro.jpg",
    "multistore.jpg",
    "supermarket.jpg",
    "restaurant.jpg",
    "hm.jpg",
    "eccormerce.jpg",
    "gretlow.png",
    "saasbg.png",
    "welcome.png",
    "genai.jpg",
    "assignment.jpg",
    "webdev.jpg",
    "cloud.jpg",
    "beanvideo.mp4",
    "faqhome.png"
)

foreach ($img in $images) {
    $source = Join-Path $sourceDir $img
    $dest = Join-Path $destDir $img
    if (Test-Path $source) {
        Copy-Item -Path $source -Destination $dest -Force
        Write-Host "Copied: $img"
    } else {
        Write-Host "Not found: $img"
    }
}

Write-Host "Done copying images!"
