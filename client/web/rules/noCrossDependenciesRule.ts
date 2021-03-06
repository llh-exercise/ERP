/*
 * Copyright (c) 2019, AngBoot Technology Corp, All Rights Reserved.
 *
 * The software and information contained herein are copyrighted and
 * proprietary to AngBoot Technology Corp. This software is furnished
 * pursuant to a written license agreement and may be used, copied,
 * transmitted, and stored only in accordance with the terms of such
 * license and with the inclusion of the above copyright notice. Please
 * refer to the file "COPYRIGHT" for further copyright and licensing
 * information. This software and information or any other copies
 * thereof may not be provided or otherwise made available to any other
 * person.
 */

import * as ts from "typescript";
import * as Lint from "tslint";

export class Rule extends Lint.Rules.AbstractRule {
   public static FAILURE_MSG: string = "cross-app dependency forbidden";
   public static PROHIBITED_DEPENDENCIES: {[name: string]: string[]} = {
      "common/": [],
      "widget/": []
   };

   public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
      return this.applyWithWalker(new NoCrossDependenciesWalker(sourceFile, this.getOptions()));
   }
}

class NoCrossDependenciesWalker extends Lint.RuleWalker {
   public visitImportDeclaration(node: ts.ImportDeclaration) {
      // let sourceFile: ts.SourceFile = <ts.SourceFile> node.parent;
      // let importFrom: string = <string> node.moduleSpecifier["text"];
      //
      // for(let prefix in Rule.PROHIBITED_DEPENDENCIES) {
      //    if(sourceFile.fileName.indexOf(prefix) === 0) {
      //       for(let prohibited of Rule.PROHIBITED_DEPENDENCIES[prefix]) {
      //          if(importFrom.indexOf(prohibited) >= 0) {
      //             this.addFailure(this.createFailure(node.getStart(), node.getWidth(), Rule.FAILURE_MSG));
      //          }
      //       }
      //
      //       break;
      //    }
      // }

      super.visitImportDeclaration(node);
   }
}
