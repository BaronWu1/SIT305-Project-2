//
//  GameViewController.swift
//  RPG
//
//  Created by Baron Wu on 2018-05-06.
//  Copyright © 2018 Baron Wu. All rights reserved.
//

import UIKit
import SpriteKit
import GameplayKit

class GameViewController: UIViewController {
    
    let defaults:UserDefaults = UserDefaults.standard


    override func viewDidLoad() {
        super.viewDidLoad()
        
        var initialLevel:String = "Grassland"
        var initialEntryNode:String = ""
        
        if defaults.object(forKey: "ContinuePoint") != nil {
            initialLevel = defaults.string(forKey: "ContinuePoint")!
            
        }
        
        if defaults.object(forKey: "ContinueWhere") != nil {
            initialEntryNode = defaults.string(forKey: "ContinueWhere")!
            
        }
        
        // If view can be converted to SK View (game view) - double check
        if let view = self.view as! SKView? {
            
            // Load the SKScene from 'GameScene.sks'
            if let scene = GameScene(fileNamed: initialLevel) {
                
                // Set the scale mode to scale to fit the window
                scene.scaleMode = .aspectFill
                scene.currentLevel = initialLevel
                scene.entryNode = initialEntryNode
                
                
                // Present the scene
                view.presentScene(scene)
            }
            
            view.ignoresSiblingOrder = true
            view.showsPhysics = false
            view.showsFPS = false
            view.showsNodeCount = false
        }
    }

    // Supporting landscape screen
    override var shouldAutorotate: Bool {
        return true
    }

    // Supporting landscape screen
    override var supportedInterfaceOrientations: UIInterfaceOrientationMask {
        if UIDevice.current.userInterfaceIdiom == .phone {
            return .allButUpsideDown
        } else {
            return .all
        }
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Release any cached data, images, etc that aren't in use.
    }

    // Hide status bar
    override var prefersStatusBarHidden: Bool {
        return true
    }
}
