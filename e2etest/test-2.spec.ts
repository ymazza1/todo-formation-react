import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('textbox', { name: 'titre de la tâche' }).click();
  await page.getByRole('textbox', { name: 'titre de la tâche' }).click();
  await page.getByRole('textbox', { name: 'titre de la tâche' }).fill('testst');
  await page.getByRole('textbox', { name: 'Description de la tâche' }).click();
  await page.getByRole('textbox', { name: 'Description de la tâche' }).fill('yuovuv');
  await page.getByRole('button', { name: 'Ajouter une tâche' }).click();
  await page.getByText('Ma TodoAbouterreur de').click();
  await page.getByRole('listitem').filter({ hasText: 'id:3 / title : teststLien' }).getByRole('link').click();
  await expect(page.getByRole('heading', { name: 'Ma Todo' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Ma Todo' })).toBeVisible();
});