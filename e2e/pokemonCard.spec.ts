import { test, expect } from '@playwright/test';

test('pokemon card interaction', async ({ page }) => {
  await page.goto('/');
  
  // Wait for the card to be visible
  await page.waitForSelector('text=Bulbasaur');
  
  // Find and verify the pokemon card
  const pokemonCard = page.getByText('Bulbasaur').first();
  await expect(pokemonCard).toBeVisible();
  
  // Click the card
  await pokemonCard.click();

  // Wait for the modal to be visible
  await page.waitForSelector('text=Abilities');
  // Verify the modal contains the pokemon's abilities
  await expect(page.locator('text=Overgrow')).toBeVisible();
  await expect(page.locator('text=Chlorophyll')).toBeVisible();
  // Close the modal
  await page.getByTestId("close-button").click();
  // Verify the card is still visible
  await expect(pokemonCard).toBeVisible();
});
