---
layout: post
title: Easy SQL Insert
---

When I taught high school, I loved providing "tips of the day" and/or "questions of the day."  Everybody loves a good sample.

Today's tip: Easy SQL insert for multiple rows

<pre style="width:400px;background: #1D1F20;color: #fff; padding:20px;font-size:16px;">
INSERT INTO Genius (FirstName, LastName)
SELECT ‘Ada’, ‘Lovelace’
UNION ALL
SELECT ‘Grace’, ‘Hopper’
UNION ALL
SELECT ‘Alan’, ‘Turing’
UNION ALL
SELECT ‘Tim’, ‘Berners-Lee’
GO
</pre>

The routine: Start with INSERT INTO and the name of your table followed by the names of the fields in order in brackets. For each row you want to insert, put SELECT followed by the values. Put string values for a varchar field in single quotes; no quotes are necessary for integer or boolean values. Add a UNION ALL line between each SELECT line but not before the first or after the last. Finally, add GO.

And off we go!
