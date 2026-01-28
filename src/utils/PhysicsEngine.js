/**
 * Simple Physics Engine for Anti-Gravity Effects
 * Handles drifting, hovering, and mouse-repelling forces.
 */

export class PhysicsElement {
  constructor(x, y, radius = 50) {
    this.x = x;
    this.y = y;
    this.baseX = x;
    this.baseY = y;
    this.vx = (Math.random() - 0.5) * 0.5; // Drift velocity
    this.vy = (Math.random() - 0.5) * 0.5;
    this.radius = radius;
    this.friction = 0.95;
    this.ease = 0.05;
  }

  update(mouseX, mouseY) {
    // Distance to mouse
    const dx = mouseX - this.x;
    const dy = mouseY - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    // Repelling force (Magnetic Cursor)
    const forceRadius = 150;
    if (distance < forceRadius) {
      const angle = Math.atan2(dy, dx);
      const force = (forceRadius - distance) / forceRadius;
      
      this.vx -= Math.cos(angle) * force * 2;
      this.vy -= Math.sin(angle) * force * 2;
    }

    // Return to base position (Ethereal tether)
    const dxBase = this.baseX - this.x;
    const dyBase = this.baseY - this.y;
    this.vx += dxBase * this.ease;
    this.vy += dyBase * this.ease;

    // Apply physics
    this.vx *= this.friction;
    this.vy *= this.friction;
    this.x += this.vx;
    this.y += this.vy;
  }
}

/**
 * Hook or helper to manage a collection of physics elements
 */
export const createDriftEffect = (elements, mouseX, mouseY) => {
  elements.forEach(el => el.update(mouseX, mouseY));
};
