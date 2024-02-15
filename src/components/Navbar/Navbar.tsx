import {Button, Container, Flex} from "@radix-ui/themes";

import styles from './Navbar.module.scss'

export const Navbar = () => {
  return (
    <Container p="4" className={styles.navbar}>
      <Flex justify="between" gap="5">
        <Button type="button" className={styles.btn}>Siema Radix Button</Button>
        <button type="button" className={styles.btn}>Siema Native button</button>
      </Flex>
    </Container>
  )
}