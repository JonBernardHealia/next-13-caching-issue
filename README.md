This is a [Next.js](https://nextjs.org/) template to use when reporting a [bug in the Next.js repository](https://github.com/vercel/next.js/issues) with the `app/` directory.

## Getting Started

These are the steps you should follow when creating a bug report:

- Bug reports must be verified against the `next@canary` release. The canary version of Next.js ships daily and includes all features and fixes that have not been released to the stable version yet. Think of canary as a public beta. Some issues may already be fixed in the canary version, so please verify that your issue reproduces before opening a new issue. Issues not verified against `next@canary` will be closed after 30 days.
- Make sure your issue is not a duplicate. Use the [GitHub issue search](https://github.com/vercel/next.js/issues) to see if there is already an open issue that matches yours. If that is the case, upvoting the other issue's first comment is desireable as we often prioritize issues based on the number of votes they receive. Note: Adding a "+1" or "same issue" comment without adding more context about the issue should be avoided. If you only find closed related issues, you can link to them using the issue number and `#`, eg.: `I found this related issue: #3000`.
- If you think the issue is not in Next.js, the best place to ask for help is our [Discord community](https://nextjs.org/discord) or [GitHub discussions](https://github.com/vercel/next.js/discussions). Our community is welcoming and can often answer a project-related question faster than the Next.js core team.
- Make the reproduction as minimal as possible. Try to exclude any code that does not help reproducing the issue. E.g. if you experience problems with Routing, including ESLint configurations or API routes aren't necessary. The less lines of code is to read through, the easier it is for the Next.js team to investigate. It may also help catching bugs in your codebase before publishing an issue.
- Don't forget to create a new repository on GitHub and make it public so that anyone can view it and reproduce it.

## How to use this template

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example reproduction-template reproduction-app
```

```bash
yarn create next-app --example reproduction-template reproduction-app
```

```bash
pnpm create next-app --example reproduction-template reproduction-app
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [How to Contribute to Open Source (Next.js)](https://www.youtube.com/watch?v=cuoNzXFLitc) - a video tutorial by Lee Robinson
- [Triaging in the Next.js repository](https://github.com/vercel/next.js/blob/canary/contributing.md#triaging) - how we work on issues
- [CodeSandbox](https://codesandbox.io/s/github/vercel/next.js/tree/canary/examples/reproduction-template) - Edit this repository on CodeSandbox

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deployment

If your reproduction needs to be deployed, the easiest way is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Setup repo for testing/reproduction

We've added Prisma to demonstrate interacting with a database.

### Setup/start app

1. Install `yarn` globally if you don't have it.
2. Run `yarn` in install packages
3. Start/Install Docker Desktop
4. Run `yarn db` to start postgres db in docker
5. In a new terminal, run `yarn migrate` to set up the db
6. Kill `yarn db` process
7. Run `yarn dev` to start app
8. Go to `localhost:3000` in your browser

### Steps to reproduce

1. Notice no todos show in list
2. Click `Add to-do` link at the top
3. On the add page, click the `add todo` button several times. Notice the client request counter goes up.
4. Click `Back to list` link at the top
5. Notice no todos show in list
6. Click the add and back links several times and no items in the list show up until the cache is revalidated once
7. When they do show up, add some more todos and click the back link. the new todos show up instantaneously

Note: refreshing the browser updates the list every time (but restarts that first revalidation clock), just not when you navigate with the router through the `Link` component or the `useRouter` hook from `next/navigation`.
