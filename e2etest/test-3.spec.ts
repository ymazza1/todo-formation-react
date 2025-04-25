import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page.getByRole('button', { name: 'Ajouter une tâche' })).toBeVisible();
  await expect(page.getByRole('paragraph')).toContainText('c\'est une super taks list');
  await page.getByRole('textbox', { name: 'titre de la tâche' }).click();
  await page.getByRole('textbox', { name: 'titre de la tâche' }).fill('test');
  await page.getByRole('textbox', { name: 'Description de la tâche' }).click();
  await page.getByRole('textbox', { name: 'Description de la tâche' }).fill('testts');
  await page.getByRole('button', { name: 'Ajouter une tâche' }).click();
  await page.getByRole('listitem').filter({ hasText: 'id:3 / title : testLien vers' }).getByRole('link').click();
  await expect(page.getByText('Le titre de ma task détaillée')).toBeVisible();
  await expect(page.getByText('MaTodo')).toBeVisible();
});