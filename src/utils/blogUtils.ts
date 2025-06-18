
// Helper function to generate dummy content for blog posts
export function generateDummyContent(title: string, intro: string): string {
  return `
    <h2>Introduction</h2>
    <p>${intro}</p>
    
    <h2>What to Expect</h2>
    <p>When visiting ${title.split(' ')[0]}, travelers can expect breathtaking landscapes, rich cultural experiences, and unforgettable adventures. The region offers something for everyone, from relaxing getaways to adrenaline-pumping activities.</p>
    
    <figure>
      <img src="https://images.unsplash.com/photo-1527631746610-bca00a040d60" alt="Scenic view" class="w-full h-auto rounded-lg my-6" />
      <figcaption class="text-sm text-center text-gray-500">Beautiful scenery you'll encounter during your journey</figcaption>
    </figure>
    
    <h2>Best Time to Visit</h2>
    <p>The ideal time to visit depends on what you're looking to experience. Each season offers its own unique charm and activities:</p>
    
    <ul class="list-disc pl-6 mb-6 space-y-2">
      <li><strong>Spring (March-May):</strong> Mild temperatures and blooming landscapes make this perfect for hiking and outdoor activities.</li>
      <li><strong>Summer (June-August):</strong> Warm weather ideal for water activities and exploring natural attractions.</li>
      <li><strong>Fall (September-November):</strong> Cooler temperatures and stunning foliage create a picturesque setting.</li>
      <li><strong>Winter (December-February):</strong> Perfect for winter sports enthusiasts and those seeking a snowy adventure.</li>
    </ul>
    
    <h2>Must-Visit Attractions</h2>
    <p>Don't miss these incredible sights during your visit:</p>
    
    <ol class="list-decimal pl-6 mb-6 space-y-2">
      <li>Scenic viewpoints offering panoramic vistas</li>
      <li>Historical monuments and cultural sites</li>
      <li>Local markets for authentic crafts and cuisine</li>
      <li>Natural wonders unique to the region</li>
    </ol>
    
    <figure>
      <img src="https://images.unsplash.com/photo-1519055548599-6d4d129508c4" alt="Local attraction" class="w-full h-auto rounded-lg my-6" />
      <figcaption class="text-sm text-center text-gray-500">One of the many breathtaking sights you'll experience</figcaption>
    </figure>
    
    <h2>Travel Tips</h2>
    <p>Here are some essential tips to make your journey smoother:</p>
    
    <ul class="list-disc pl-6 mb-6 space-y-2">
      <li>Pack appropriate clothing for the season</li>
      <li>Carry local currency for small purchases</li>
      <li>Learn a few phrases in the local language</li>
      <li>Research local customs and etiquette before your trip</li>
      <li>Book accommodations in advance, especially during peak season</li>
    </ul>
    
    <h2>Culinary Experiences</h2>
    <p>The local cuisine is a delightful aspect of any travel experience. Be sure to try these regional specialties:</p>
    
    <ul class="list-disc pl-6 mb-6 space-y-2">
      <li>Traditional dishes passed down through generations</li>
      <li>Street food that locals love</li>
      <li>Seasonal delicacies only available at certain times</li>
      <li>Beverages unique to the region</li>
    </ul>
    
    <figure>
      <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836" alt="Local cuisine" class="w-full h-auto rounded-lg my-6" />
      <figcaption class="text-sm text-center text-gray-500">Sample the delicious local cuisine during your stay</figcaption>
    </figure>
    
    <h2>Conclusion</h2>
    <p>Whether you're seeking adventure, relaxation, or cultural immersion, ${title.split(' ')[0]} offers an unforgettable experience. Plan your trip thoughtfully to make the most of this amazing destination.</p>
  `;
}
