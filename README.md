```
                       _..gggggppppp.._
                  _.gd$$$$$$$$$$$$$$$$$$bp._
               .g$$$$$$P^^""j$$b""""^^T$$$$$$p.
            .g$$$P^T$$b    d$P T;       ""^^T$$$p.
          .d$$P^"  :$; `  :$;                "^T$$b.
        .d$$P'      T$b.   T$b                  `T$$b.
       d$$P'      .gg$$$$bpd$$$p.d$bpp.           `T$$b
      d$$P      .d$$$$$$$$$$$$$$$$$$$$bp.           T$$b
     d$$P      d$$$$$$$$$$$$$$$$$$$$$$$$$b.          T$$b
    d$$P      d$$$$$$$$$$$$$$$$$$P^^T$$$$P            T$$b
   d$$P    '-'T$$$$$$$$$$$$$$$$$$bggpd$$$$b.           T$$b
  :$$$      .d$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$p._.g.     $$$;
  $$$;     d$$$$$$$$$$$$$$$$$$$$$$$P^"^T$$$$P^^T$$$;    :$$$
 :$$$     :$$$$$$$$$$$$$$:$$$$$$$$$_    "^T$bpd$$$$,     $$$;
 $$$;     :$$$$$$$$$$$$$$bT$$$$$P^^T$p.    `T$$$$$$;     :$$$
:$$$      :$$$$$$$$$$$$$$P `^^^'    "^T$p.    lb`TP       $$$;
:$$$      $$$$$$$$$$$$$$$              `T$$p._;$b         $$$;
$$$;      $$$$$$$$$$$$$$;                `T$$$$:Tb        :$$$
$$$;      $$$$$$$$$$$$$$$                        Tb    _  :$$$
:$$$     d$$$$$$$$$$$$$$$.                        $b.__Tb $$$;
:$$$  .g$$$$$$$$$$$$$$$$$$$p...______...gp._      :$`^^^' $$$;
 $$$;  `^^'T$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$p.    Tb._, :$$$
 :$$$       T$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$b.   "^"  $$$;
  $$$;       `$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$b      :$$$
  :$$$        $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$;     $$$;
   T$$b    _  :$$`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$;   d$$P
    T$$b   T$g$$; :$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$  d$$P
     T$$b   `^^'  :$$ "^T$$$$$$$$$$$$$$$$$$$$$$$$$$$ d$$P
      T$$b        $P     T$$$$$$$$$$$$$$$$$$$$$$$$$;d$$P
       T$$b.      '       $$$$$$$$$$$$$$$$$$$$$$$$$$$$P
        `T$$$p.   bug    d$$$$$$$$$$$$$$$$$$$$$$$$$$P'
          `T$$$$p..__..g$$$$$$$$$$$$$$$$$$$$$$$$$$P'
            "^$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$^"
               "^T$$$$$$$$$$$$$$$$$$$$$$$$$$P^"
                   """^^^T$$$$$$$$$$P^^^"""
Art by Blazej Kozlowski
```

# About

A simple IoC example based on the official InversifyJS library using the [official basic example](https://github.com/inversify/inversify-basic-example) but instead of just ordinary ninjas vs samurais it's themed as [Mortal Kombat](https://en.wikipedia.org/wiki/Mortal_Kombat).

# How to run

```bash
yarn && yarn fight
```

# To do

1. [ ] Add unit tests
2. [ ] Document project structure

## Notes

※ The `reflect-metadata` polyfill should be imported only once in your entire application because the Reflect object is mean to be a global singleton

※ It is recommended to use Symbols but InversifyJS also support the usage of Classes and string literals.
