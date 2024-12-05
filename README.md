# Counter example

A simple example of how to use the Tactics API to create simple counter application.

## How to Use This Template

1. Click the "Use this template" button at the top of this repository to create a copy in your GitHub account
   - Select "Create a new repository"
   - Make sure to set the repository to "Public"

2. Clone your new repository to your local machine:
   ```bash
   git clone https://github.com/[your-username]/[repo-name].git
   cd [repo-name]
   ```

3. Enable GitHub Pages:
   - Go to your repository settings
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "main" branch
   - Select "/ (root)" as the folder
   - Click "Save"
   - Wait a few minutes for deployment to complete

4. Access your game:
   - Your game will be available at `https://[your-username].github.io/[repo-name]`

5. Test your app locally (optional):
   - Use a local server:
     ```bash
     python -m http.server 5174
     ```

     or using node's http-server:

     ```bash
     http-server -p 5174 -c-1
     ```
   - Then visit `http://localhost:5174` in your browser

## Customization

You can customize the app in several ways:

- Update UI styling in `index.html`:
  - Modify colors, fonts, and layout in the `<style>` section
- Adjust tactic behavior by editing the tactic directly in your forked tactic.
