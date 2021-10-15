import { countScore } from "./countScore"

const test1 = `M             (5)     ()     ()     ()
T              (5)     ()     ()     ()
W            (5)     ()     ()     ()
T              (6)     ()     ()     ()
F              ()     ()     ()     ()
S              ()     ()     ()     ()
S              ()     ()     ()     () `

const test2 = `
August 23 to September 19, 2021.

♥️♥️
weeks—-M—-T—-W—-T—-F—-S—-S
1.          (7)     (9)     (6)     (7)    (9)    (6)    (8)
2.         (4)     (6)     (7)     (2)    (8)    (9)    (5)
3.         (4)     (3)     (2)     (1)    (6)    (7)    (8)
4.         (8)     (3)     (7)     (5)    (7)    (7)    (7) 
`

const test3 = `
weeks—-M—-T—-W—-T—-F—-S—-S
1.        (8)     (8)     (7)     (5)    (7)    (8)    (8)
2.       (6)     (8)     (-)     (9)    (6)    (7)    (5)
3.       ()     ()     ()     ()    ()    ()    ()
4.       ()     ()     ()     ()    ()    ()    ()
`

test("extract all numbers and add them up", () => {
  expect(countScore("(8)")).toBe(8)
  expect(countScore(test1)).toBe(21)
  expect(countScore(test2)).toBe(168)
  expect(countScore(test3)).toBe(92)
})

test("returns 0 when no valid score is found", () => {
  expect(countScore("()")).toBe(0)
  expect(countScore("42")).toBe(0)
  expect(countScore("ddd")).toBe(0)
})
