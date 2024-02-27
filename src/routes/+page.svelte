<script>
  import {
    Page,
    Navbar,
    Block,
    Button,
    List,
    ListItem,
    BlockTitle,
    useTheme
  } from 'konsta/svelte';

  /**
   * @type {string}
   */
  let theme;
  theme = useTheme((newValue) => {
    theme = newValue;
  })
</script>

<Page>
  <Navbar title={`My ${String(theme).toUpperCase()} App`} />
  <Block strong>
    <p>Here is your SvelteKit & Konsta UI app. Let's see what we have here.</p>
  </Block>
  <BlockTitle>Navigation</BlockTitle>
  <List>
    <ListItem href="/about/" title="About" />
    <ListItem href="/form/" title="Form" />
  </List>

  <Block strong class="flex space-x-4">
    <Button>Button 1</Button>
    <Button>Button 2</Button>
  </Block>
</Page>